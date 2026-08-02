# HyperServer Design System

Общие темы, цветовые токены и иконки для приложений HyperServer. Пакет не привязан к Control Center: CSS и vanilla API работают в любом веб-приложении, а React-компоненты доступны отдельным экспортом.

## Установка с GitHub

Версия фиксируется тегом, поэтому сборка приложения не меняется вслед за `main`:

```json
{
  "dependencies": {
    "@hyperserver/design-system": "https://github.com/VladimirKraswov/hyperserver-design-system/archive/refs/tags/v0.1.0.tar.gz"
  }
}
```

Затем выполните `npm install`.

## Темы

Подключите CSS один раз в корневой точке приложения:

```ts
import "@hyperserver/design-system/themes.css"
```

```ts
import { applyTheme, loadStoredTheme } from "@hyperserver/design-system"

applyTheme(loadStoredTheme())
applyTheme("ember-dark")
```

По умолчанию тема записывается в `data-theme` на `<html>` и сохраняется под ключом `hyperserver-theme`. Для независимой темы внутри части страницы используйте `data-hyper-theme`:

```ts
applyTheme("peach-light", {
  target: document.querySelector("#embedded-app")!,
  attribute: "data-hyper-theme",
  persist: false,
})
```

Доступны `peach-light` и `ember-dark`. Обе темы имеют одинаковый контракт из 46 CSS-переменных: фоновые поверхности, текст, границы, состояния, тени и отдельная палитра подсветки кода.

```css
.card {
  color: var(--ink);
  background: var(--surface);
  border: 1px solid var(--line);
  box-shadow: var(--shadow-small);
}

.card__action {
  color: white;
  background: var(--accent);
}
```

Те же значения доступны из TypeScript через `themes`, `themeNames`, `themeTokenNames` и `cssVariable()`.

## React-иконки

```tsx
import { CopyIcon, HyperIcon } from "@hyperserver/design-system/react"

<CopyIcon size={18} />
<HyperIcon name="brain" title="Выбрать модель" />
```

Декоративные иконки автоматически получают `aria-hidden`. Если передан `title` или `aria-label`, SVG получает роль изображения.

## Иконки без React

```ts
import { renderIconSvg } from "@hyperserver/design-system/icons"

button.innerHTML = renderIconSvg("copy", {
  size: 18,
  title: "Копировать",
})
```

В набор входят 27 иконок: `archive`, `brain`, `chat`, `check`, `close`, `copy`, `eye`, `file`, `files`, `menu`, `mic`, `more`, `panelClose`, `panelOpen`, `paperclip`, `pencil`, `pin`, `plus`, `refresh`, `search`, `send`, `services`, `settings`, `stop`, `trash`, `voice`, `volume`.

## Разработка и выпуск версии

```bash
npm install
npm test
npm run build
git tag v0.1.0
git push origin main --tags
```

Папка `dist` хранится в репозитории намеренно: приложения могут устанавливать архив GitHub-тега без локального `git` и без сборки пакета на production-сервере.
