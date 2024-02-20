# Лэндинг Онлайн-Галереи

Проект развернут на [nextjs](https://nextjs.org), версия 14.

## Установка зависимостей.

```bash
yarn
```

## Запуск приложения

```bash
# development
$ yarn dev

# production
$ yarn build
$ yarn start
```

## Качество кода

### Проверка
```bash
# типизация
$ yarn check:types

# eslint
$ yarn check:lint

# prettier
$ yarn check:prettier

# stylelint
$ yarn check:stylelint

# all
$ yarn check:all
```

### Исправление
```bash
# eslint
$ yarn fix:lint

# prettier
$ yarn fix:prettier

# stylelint
$ yarn fix:stylelint

# all
$ yarn fix:all
```

Перед коммитом запускается husky и происходит проверка с помощью всех линтеров. Также проверяется шаблон на текст коммита.

```bash
chore: run tests on travis ci
fix(server): #13 send cors headers
feat(blog): #42 add comment section
```

## Репозиторий
В репозитории 2 основные ветки: `master` и `develop`. Разработка ведется через создание веток от `develop`. `Master` - ветка для прода.
