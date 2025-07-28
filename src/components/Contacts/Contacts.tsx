import type { FC } from 'react';
import tg from 'assets/telegram.png';
import email from 'assets/email.png';
import phone from 'assets/phone-call.png';
import CSS from './Contacts.module.scss';

const Contacts: FC = () => {
  return (
    <div className={CSS.contacts}>
      <p>Наши контакты:</p>
      <a href="https://t.me/Vikibulaeva" rel={'noreferrer'} target={'_blank'}>
        <img src={tg} alt="Telegram" />
      </a>
      <a
        href="mailto:vishinsky-oleg@gmail.com"
        rel={'noreferrer'}
        target={'_blank'}
      >
        <img src={email} alt="Telegram" />
      </a>
      <a href="tel:+79278973347" rel={'noreferrer'} target={'_blank'}>
        <img src={phone} alt="Telegram" />
      </a>
    </div>
  );
};

export default Contacts;
