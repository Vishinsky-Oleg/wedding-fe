import type { TInfoVariants } from 'pages/Info/types.ts';

export const INFO_TEXTS: Record<TInfoVariants, string> = {
  'connection-error':
    'Произошла ошибка сети. Пожалуйста проверьте подключение, перезагрузите страницу и попробуйте пройти опрос снова',
  'wrong-id':
    'Перейдите пожалуйста по ссылке которую вам прислали, иначе мы не сможем понять кто вы',
  'page-not-found': 'К сожалению такой страницы не существует',
} as const;
