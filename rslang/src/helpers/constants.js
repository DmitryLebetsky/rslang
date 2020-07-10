import noAvatar from '../assets/images/avatar.jpg';

const defaultPaginationCount = 10;

const apiLinks = {
  file: 'https://raw.githubusercontent.com/hallovarvara/rslang-data/master/',
  base: 'https://kagafon-learn-words.herokuapp.com/',
};

const localStorageItems = {
  token: 'tokenRslang',
  userId: 'rslangUserId',
  refreshTokenDate: 'refreshTokenDate',
};

const count = {
  groups: 6,
  pages: 29,
  words: 19,
};

export const applicationThings = {
  LEARN_WORDS: 'learnWords',
  SAVANNAH: 'savannah',
  SPRINT: 'sprint',
  AUDIOCALL: 'audiocall',
  SPEAK_IT: 'speakIt',
  PUZZLE: 'puzzle',
  UNMESS: 'unmess',
};

export const userSettingsTemplate = {
  IS_SHOWN_COMPLICATED_BUTTON: 'isShownComplicatedButton',
  IS_SHOWN_ANSWER_BUTTON: 'isShownAnswerButton',
  IS_SHOWN_IMAGE_ASSOCIATION: 'isShownImageAssociation',
  IS_SHOWN_TRANSLATION: 'isShownTranslation',
  IS_SHOWN_TRANSCRIPTION: 'isShownTranscription',
  IS_SHOWN_EXAMPLE_SENTENCE: 'isShownExampleSentence',
  IS_SHOWN_MEANING: 'isShownMeaning',
};

export const levelsOfDifficulty = {
  HARD: 'hard',
  NORMAL: 'normal',
  EASY: 'easy',
};

export const dateFormatTemplate = 'DD.MM.YYYY';

const linkedinLink = 'https://www.linkedin.com/in/';

const pagesData = {
  aboutUs: {
    title: 'О нас',
    path: 'about-us',
    guest: { isVisible: true, index: 0 },
    user: { isVisible: true, index: 2 },
  },
  learnWords: {
    title: 'Учить слова',
    path: '',
    guest: { isVisible: true, index: 1 },
    user: { isVisible: true, index: 0 },
  },
  play: {
    title: 'Играть',
    path: 'play',
    guest: { isVisible: true, index: 2 },
    user: { isVisible: true, index: 1 },
  },
  promo: {
    title: 'Промо',
    path: 'promo',
    guest: { isVisible: false },
    user: { isVisible: false },
  },
  settings: {
    title: 'Настройки',
    path: 'settings',
    guest: { isVisible: false },
    user: { isVisible: true, index: 5 },
  },
  signIn: {
    title: 'Войти',
    path: 'sign-in',
    guest: { isVisible: true, index: 5 },
    user: { isVisible: false },
  },
  register: {
    title: 'Зарегистрироваться',
    path: 'register',
    guest: { isVisible: false },
    user: { isVisible: false },
  },
  statistics: {
    title: 'Статистика',
    path: 'statistics',
    guest: { isVisible: true, index: 3 },
    user: { isVisible: true, index: 3 },
  },
  vocabulary: {
    title: 'Словарь',
    path: 'vocabulary',
    guest: { isVisible: true, index: 4 },
    user: { isVisible: true, index: 4 },
  },
};

const gamesData = {
  speakit: {
    title: 'SpeakIt',
    description: 'Вырабатывайте правильное произношение слов вместе с нашей космической игрой',
    path: 'speakit',
  },
  englishPuzzle: {
    title: 'English Puzzle',
    description: 'Учитесь строить предложения и знакомьтесь с величайшими произведениями искусства',
    path: 'english-puzzle',
  },
  savannah: {
    title: 'Саванна',
    description: 'Угадывайте, как переводятся слова, и вместе с этим пополняйте лексикон',
    path: 'savannah',
  },
  audiocall: {
    title: 'Аудиовызов',
    description: 'Прокачивайте восприятие языка на слух, а также увеличивайте свой словарный запас',
    path: 'audiocall',
  },
  sprint: {
    title: 'Спринт',
    description: 'Играйте на время, чтобы точно знать, как много слов вы можете перевести за минуту',
    path: 'sprint',
  },
  unmess: {
    title: 'Unmess',
    description: 'Соединяйте слова и их значения, расширяя запас слов и улучшая понимание смысла фраз',
    path: 'unmess',
  },
};

const teamMembers = [
  {
    name: 'Дмитрий',
    surname: 'Лебецкий',
    role: 'Работал как волк, делал все подряд',
    image: noAvatar,
    linkedinUsername: 'dmitry-lebetsky',
  },
  {
    name: 'Варвара',
    surname: 'Девятерикова',
    role: 'Работала как волчица, делала все подряд',
    image: noAvatar,
    linkedinUsername: 'hallovarvara',
  },
  {
    name: 'Артем',
    surname: 'Римарчук',
    role: 'Работал как волк, делал все подряд',
    image: noAvatar,
    linkedinUsername: 'artemrimarchyk',
  },
  {
    name: 'Ксения',
    surname: 'Яцкевич',
    role: 'Работала как волчица, делала все подряд',
    image: noAvatar,
    linkedinUsername: 'ksenia-yatskevich',
  },
  {
    name: 'Максим',
    surname: 'Касприв',
    role: 'Работал как волк, делал все подряд',
    image: noAvatar,
    linkedinUsername: 'maksym-kaspriv',
  },
  {
    name: 'Алексей',
    surname: 'Осипов',
    role: 'Работал как волк, делал все подряд',
    image: noAvatar,
    linkedinUsername: '',
  },
];

const selectorOptions = [
  ['new', 'new & repeating'],
  ['complicated', 'complicated'],
  ['removed', 'removed'],
];

/* Games */

const audio = {
  error: './audio/error.mp3',
  success: './audio/success.mp3',
};

const wordsGroups = 6;
const audiocallMaxLevels = 12;

const buttonTextContent = {
  next: 'Далее',
  dontKnow: 'Не знаю',
  startGame: 'Играть',
  newGame: 'Начать новую игру',
};

const textContent = {
  correct: 'Правильно',
  error: 'Неправильно',
};

const text = {
  ru: {
    nickname: 'Логин',
    email: 'Емейл',
    password: 'Пароль',
    repeatPassword: 'Повторите пароль',
    alreadyRegistered: 'Уже зарегистрированы?',
    firstTimeOrForgotPassword: 'Впервые тут или забыли пароль?',
  },
};

const formLabel = {
  level: 'Уровень',
  chooseLevel: 'Выберите уровень',
  questions: 'Сколько слов хотите отгадать? (5—12)',
  answers: 'Сколько показывать вариантов ответов? (2—5)',
};

export {
  pagesData,
  selectorOptions,
  defaultPaginationCount,
  apiLinks,
  linkedinLink,
  gamesData,
  teamMembers,
  audio,
  wordsGroups,
  audiocallMaxLevels,
  buttonTextContent,
  textContent,
  formLabel,
  count,
  localStorageItems,
  text,
};
