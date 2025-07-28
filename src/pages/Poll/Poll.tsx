import { type FC, useState } from 'react';
import type { TPoll, TPollRequestBody, TSurvey } from 'pages/Poll/types.ts';
import { type SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import type { ObjectSchema } from 'yup';
import * as yup from 'yup';
import axios from 'axios';
import CSS from './Poll.module.scss';
import AnimatedCheckbox from 'components/ToggleSwitch/AnimatedCheckbox.tsx';
import Loader from 'components/Loader/Loader.tsx';
import { Info } from 'pages/Info';

const Poll: FC<TSurvey> = ({ currentUser, onStopPollButtonClick }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

  const schema: ObjectSchema<TPoll> = yup.object({
    isComing: yup.boolean(),
    withChildren: yup.boolean(),
    hasAllergies: yup.string().max(99, 'Максимум 99'),
    additionalInfo: yup.string().max(99, 'Максимум 150'),
  });

  const { watch, handleSubmit, register } = useForm<TPoll>({
    resolver: yupResolver(schema),
    defaultValues: {
      additionalInfo: '',
      withChildren: false,
      isComing: false,
      hasAllergies: '',
    },
  });

  const { isComing } = watch();

  const onSubmit: SubmitHandler<TPoll> = async ({
    additionalInfo,
    hasAllergies,
    isComing,
    withChildren,
  }) => {
    setIsLoading(true);
    const requestBody: TPollRequestBody = {
      guestId: currentUser._id,
      additionalInfo,
      withChildren,
      isComing,
      hasAllergies,
      name: currentUser.name,
    };
    try {
      const pollIsConducted = await axios.post<TPollRequestBody>(
        `${API_BASE_URL}/api/poll`,
        requestBody
      );
      if (pollIsConducted) {
        onStopPollButtonClick();
      }
    } catch {
      setError(true);
    } finally {
      setIsLoading(false);
    }
  };

  if (error) {
    return <Info variant={'connection-error'} />;
  }

  return isLoading ? (
    <Loader />
  ) : (
    <div className={CSS.form__outer_container}>
      <form onSubmit={handleSubmit(onSubmit)} className={CSS.form}>
        <div className={CSS.form__heading}>
          <h1>Подтвердите ваше участие в нашей свадьбе</h1>
          <p>
            Пожалуйста, заполните эту форму — это поможет нам всё организовать.
          </p>
        </div>

        <div className={CSS.form__question_block}>
          <AnimatedCheckbox
            id="isComing"
            register={register}
            label="Примете ли вы участие в свадьбе?"
          />
        </div>

        {currentUser.withC && (
          <div className={CSS.form__question_block}>
            <AnimatedCheckbox
              id="withChildren"
              register={register}
              label="Будут ли с вами дети?"
              disabled={!isComing}
            />
            <div className={CSS.form__question_block_note}>
              Мы рады видеть вас на нашем торжестве. Пожалуйста, примите к
              сведению, что мероприятие будет только для взрослых. С любовью и
              уважением просим оставить ваших малышей дома, чтобы вы могли
              полностью насладиться нашим днем.
            </div>
          </div>
        )}
        <div className={CSS.form__question_block}>
          <label
            htmlFor={'hasAllergies'}
            className={isComing ? '' : CSS.disabled}
          >
            Есть ли у вас аллергии
          </label>
          <textarea
            {...register('hasAllergies')}
            disabled={!isComing}
            name={'hasAllergies'}
            className={CSS.text_area}
          />
        </div>
        <div className={CSS.form__question_block}>
          <label
            htmlFor={'additionalInfo'}
            className={isComing ? '' : CSS.disabled}
          >
            Дополнительная информация
          </label>
          <textarea
            {...register('additionalInfo')}
            disabled={!isComing}
            name={'additionalInfo'}
            className={CSS.text_area}
            placeholder={'Задайте вопросы и оставьте комментарии...'}
          />
        </div>
        <div className={CSS.form__buttons}>
          <button
            onClick={onStopPollButtonClick}
            className={[CSS.button, CSS.white].join(' ')}
          >
            Назад
          </button>
          <button type={'submit'} className={CSS.button}>
            Отправить
          </button>
        </div>
      </form>
    </div>
  );
};

export default Poll;
