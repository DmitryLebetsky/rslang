import noAvatar from '../assets/images/avatar.jpg';

import soundError from '../assets/audio/error.mp3';
import soundSuccess from '../assets/audio/success.mp3';
import soundFinish from '../assets/audio/finish.mp3';

const apiLinks = {
  file: 'https://raw.githubusercontent.com/hallovarvara/rslang-data/master/',
  base: 'https://kagafon-learn-words.herokuapp.com/',
  paintings: 'https://raw.githubusercontent.com/hallovarvara/rslang_data_paintings/master/',
};

const localStorageItems = {
  username: 'rslangName',
  token: 'rslangToken',
  userId: 'rslangUserId',
  refreshTokenDate: 'refreshTokenDate',
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

const preloaderdefaultSettings = {
  size: 150,
  color: '#843FDD',
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
    title: 'Кто мы',
    path: 'about-us',
    guest: { isVisible: true, index: 3 },
    user: { isVisible: true, index: 2 },
  },
  learnWords: {
    title: 'Учить слова',
    path: 'learn',
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
    title: 'О проекте',
    path: '',
    guest: { isVisible: true, index: 0 },
    user: { isVisible: true, index: 2 },
  },
  settings: {
    title: 'Настройки',
    path: 'settings',
    guest: { isVisible: false },
    user: { isVisible: true, index: 6 },
  },
  signIn: {
    title: 'Войти',
    path: 'sign-in',
    guest: { isVisible: true, index: 6 },
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
    guest: { isVisible: true, index: 4 },
    user: { isVisible: true, index: 4 },
  },
  vocabulary: {
    title: 'Словарь',
    path: 'vocabulary',
    guest: { isVisible: true, index: 5 },
    user: { isVisible: true, index: 5 },
  },
};

const gamesData = {
  audiocall: {
    title: 'Аудиовызов',
    description: 'Прокачивайте восприятие языка на слух, а также увеличивайте свой словарный запас',
    path: 'audiocall',
  },
  savannah: {
    title: 'Саванна',
    description: 'Угадывайте, как переводятся слова, и вместе с этим пополняйте лексикон',
    path: 'savannah',
  },
  sprint: {
    title: 'Спринт',
    description: 'Играйте на время, чтобы точно знать, как много слов вы можете перевести за минуту',
    path: 'sprint',
  },
  englishPuzzle: {
    title: 'English Puzzle',
    description: 'Учитесь строить предложения и знакомьтесь с величайшими произведениями искусства',
    path: 'english-puzzle',
  },
  speakit: {
    title: 'SpeakIt',
    description: 'Вырабатывайте правильное произношение слов вместе с нашей космической игрой',
    path: 'speakit',
  },
  unmess: {
    title: 'Unmess',
    description: 'Соединяйте слова и их значения, расширяя запас слов и улучшая понимание смысла фраз',
    path: 'unmess',
    startPath: 'unmess/home',
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
  'new & repeating', 'complicated', 'removed',
];

/* Games */

const audio = {
  error: 'error.mp3',
  success: 'success.mp3',
  win: 'finish.mp3',
};

const text = {
  ru: {
    /* About us */
    aboutUs: {
      description: 'Привет! Мы рады представить продукт нашей совместной работы — приложение по изучению английского языка',
    },

    /* Sign In, Register */
    nickname: 'Логин',
    email: 'Емейл',
    password: 'Пароль',
    repeatPassword: 'Повторите пароль',
    alreadyRegistered: 'Уже зарегистрированы?',
    firstTimeOrForgotPassword: 'Впервые тут или забыли пароль?',
    incorrectLoginData: 'Вы ввели неправильный логин или пароль. Попробуйте снова',
    userUndefined: 'Емейл не зарегистрирован. Проверьте правильность его написания или зарегистрируйтесь',
    welcome: 'Добро пожаловать, {username} :)',

    /* Vocabulary page */
    restoreForLearning: 'Вернуть к изучаемым',

    /* Games */
    levelsTitles: ['Первый', 'Второй', 'Третий', 'Четвертый', 'Пятый', 'Шестой'],
    answersCorrect: 'Угадано',
    answersMistaken: 'Не угадано',
    howManyAnswers: 'Сколько показывать вариантов ответа',
    howManyWords: 'Сколько слов хотите угадать',
    chooseLevel: 'Выберите уровень сложности',
    notEnoughWords: '* Если в словаре недостаточно слов для игр, слова будут появляться из выбранного уровня',

    /* Unmess */
    unmess: {
      instruction: 'Схватите слово и отпустите над его значением',
    },

    /* Buttons */
    button: {
      next: 'Далее',
      dontKnow: 'Не знаю',
      startGame: 'Играть',
      newGame: 'Начать новую игру',
      learnWords: 'Изучать слова',
      learnEnglishWithUs: 'Учите английский с нами',
    },
  },
};

const formLabel = {
  level: 'Уровень',
  chooseLevel: 'Выберите уровень',
  questions: 'Сколько слов хотите отгадать? (5—12)',
  answers: 'Сколько показывать вариантов ответов? (2—5)',
};

const questionStatus = {
  success: 'success',
  error: 'error',
};

const ratesScale = [
  { level: 30, rate: 31 },
  { level: 21, rate: 30 },
  { level: 15, rate: 21 },
  { level: 10, rate: 15 },
  { level: 7, rate: 10 },
  { level: 4, rate: 7 },
  { level: 2, rate: 4 },
  { level: 0, rate: 2 },
];

const count = {
  /* API settings */
  groups: 6,
  pages: 29,
  words: 19,

  /* Time */
  minInHour: 60,
  secInMin: 60,
  msInSec: 1000,
  tokenLifetimeInHours: 4,

  /* Defaults */
  elementsPerPage: 10,

  /* Game Audiocall */
  audiocall: {
    maxLevels: 12,
  },

  /* Game Savannah */
  savannah: {
    defaultLevel: 0,
    minAnswers: 2,
    maxAnswers: 5,
    minQuestions: 5,
    maxQuestions: 50,
  },

  /* Game Sprint */
  sprint: {
    counterMultiplier: 2,
    pointsMultiplier: 10,
    correctAnswerOnce: 4,
  },
};

export {
  pagesData,
  selectorOptions,
  apiLinks,
  linkedinLink,
  gamesData,
  teamMembers,
  audio,
  formLabel,
  count,
  localStorageItems,
  text,
  soundError,
  soundSuccess,
  soundFinish,
  questionStatus,
  preloaderdefaultSettings,
  ratesScale,
};
