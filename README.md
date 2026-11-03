# To Do List

Веб-приложение для управления задачами на React. Интерфейс собран с помощью Vite, данные хранятся в JSON Server.

## Возможности

- Добавление и удаление задач, в том числе удаление всех задач.
- Отметка задачи как выполненной.
- Поиск задач по названию с подсветкой совпадений.
- Просмотр задачи и её статуса на отдельной странице.
- Переход к первой невыполненной задаче.

## Технологии

- React 19
- Vite
- Sass
- JSON Server
- Docker Compose

## Запуск через Docker

Нужны Docker Desktop и Docker Compose. Из корня проекта выполните:

```bash
docker compose up --build
```

После запуска:

- приложение: <http://localhost:5173>
- API задач: <http://localhost:3001/tasks>

Остановить контейнеры можно сочетанием `Ctrl+C`. Для запуска в фоне используйте `docker compose up --build -d`, а для остановки — `docker compose down`.

## Локальный запуск без Docker

Нужен Node.js версии 22 или новее.

1. Установите зависимости:

   ```bash
   npm install
   ```

2. Запустите JSON Server в первом терминале:

   ```bash
   npm run server
   ```

3. Запустите Vite во втором терминале:

   ```bash
   npm run dev
   ```

Откройте адрес, указанный Vite (обычно <http://localhost:5173>). API запускается на порту `3001`.

## Команды

```bash
npm run dev       # запуск Vite в режиме разработки
npm run server    # запуск JSON Server на порту 3001
npm run build     # production-сборка в dist/
npm run preview   # просмотр production-сборки
npm run lint      # проверка кода Oxlint
```

Чтобы проверить production-сборку в Docker, сначала создайте её, затем запустите preview в контейнере:

```bash
docker compose exec app npm run build
docker compose exec app npm run preview
```

Откройте <http://localhost:4173>. Порт `4173` опубликован в Compose, а preview слушает сетевой интерфейс контейнера.

## Публикация на GitHub Pages

Скрипт `npm run deploy` собирает приложение, создаёт `dist/404.html` для SPA-маршрутов и публикует каталог `dist` в ветку `gh-pages`. Docker-образ содержит Git. Перед первой публикацией настройте автора коммитов в репозитории и убедитесь, что настроен remote `origin` и есть право отправлять в него изменения:

```bash
docker compose exec app git config user.name "Ваше имя"
docker compose exec app git config user.email "ваш-email@example.com"
docker compose exec app npm run deploy
```

Для контейнерного деплоя также должны быть доступны GitHub credentials. Либо выполните `npm run deploy` локально из окружения, где настроены Node.js, Git и авторизация GitHub.

GitHub не принимает пароль аккаунта для Git по HTTPS. При запросе `Username` укажите имя пользователя GitHub, а при запросе `Password` вставьте Personal Access Token (PAT) с правом `Contents: Read and write` для этого репозитория (для classic token требуется scope `repo`). Создать токен можно в настройках GitHub → Developer settings → Personal access tokens. Не вставляйте токен в URL репозитория, команды или файлы проекта; при вводе в запрос `Password` символы обычно не отображаются.

Если деплой завершился ошибкой `a branch named 'gh-pages' already exists`, очистите кэш `gh-pages` и повторите команду:

```bash
docker compose exec app npx gh-pages-clean
docker compose exec app npm run deploy
```

## Данные и адреса страниц

JSON Server читает и сохраняет задачи в `db.json`. Ресурс API — `/tasks`. Адрес API (`http://localhost:3001/tasks`) задан в `src/shared/api/tasks/index.js`.

- `/` — список задач.
- `/tasks/:id` — отдельная задача и её статус.

## Структура исходников

```text
src/
├── app/                 # сборка приложения, маршрутизация и глобальные стили
├── entities/todo/       # модель задач, контекст, список и элемент задачи
├── features/            # добавление, поиск и статистика задач
├── pages/               # страницы списка и отдельной задачи
├── shared/              # API, общие UI-компоненты, хуки и ресурсы
└── widgets/             # составной виджет списка задач
```

В Vite настроен алиас `@`, который указывает на каталог `src`. Например: `@/shared/api/tasks/index.js`.
