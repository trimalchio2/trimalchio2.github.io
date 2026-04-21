# GitHub Pages 部署說明

這個版本已經調整成更適合 GitHub Pages 的靜態網站。核心原因在於它現在會以 **相對路徑** 建置前端資源，因此無論你是部署到 `username.github.io` 這種根站點，或是部署到 `username.github.io/project-name/` 這種子路徑站點，都比較不容易發生 CSS、JavaScript 或圖片載入失敗的問題。

## 這次做了哪些調整

| 調整項目 | 目的 |
| --- | --- |
| `vite.config.ts` 加入 `base: "./"` | 讓建置後的靜態資源用相對路徑載入，提升 GitHub Pages 相容性 |
| `package.json` 加入 `build:static` | 專門輸出 GitHub Pages 需要的純靜態檔案 |
| 自動複製 `index.html` 為 `404.html` | 讓未來若有前端路由時，GitHub Pages 的 fallback 行為更穩定 |
| 建置時建立 `.nojekyll` | 避免 GitHub Pages 的 Jekyll 處理影響靜態檔案 |
| 新增 `.github/workflows/deploy-github-pages.yml` | 可直接使用 GitHub Actions 自動建置與發佈 |

## 你應該怎麼部署

如果你打算把它部署到你原本的 `trimalchio2.github.io` repository，最建議的做法是直接把這個專案內容推到該 repo 的 `main` branch，然後到 GitHub repository 的 **Settings → Pages** 中，將來源設成 **GitHub Actions**。之後每次 push 到 `main`，GitHub 就會自動建置並更新網站。

## 建置輸出在哪裡

這個專案給 GitHub Pages 使用的靜態輸出，是由下面這個指令產生：

```bash
pnpm build:static
```

執行後，可部署的檔案會在：

```bash
dist/public
```

如果你不想用 GitHub Actions，也可以手動把 `dist/public` 內的內容部署到 Pages 所使用的 branch，但長期來看不如 Actions 穩定。

## 什麼情況下還需要額外注意

| 情況 | 是否需要額外處理 | 說明 |
| --- | --- | --- |
| 你使用 `trimalchio2.github.io` 當主 repo | 通常不需要 | 因為它部署在網域根目錄 |
| 你把網站放在一般 repo 的 Pages 子路徑 | 目前多半也不需要 | 因為相對路徑設定已處理大部分資源路徑問題 |
| 你未來新增真正的多頁前端路由 | 可能需要再測試 | 雖然已加 `404.html` fallback，但仍建議實測深層路徑 |
| 你要串接後端表單或 API | 需要其他服務 | GitHub Pages 本身只能託管靜態前端 |

## 對你目前網站最實際的建議

如果你想最快上線，最好的方式不是回頭改舊的純 HTML 結構，而是直接沿用這個新版專案，因為它已經把首頁架構、視覺樣式與 GitHub Pages 相容性一起整理好了。你接下來只需要替換你的文案、作品與聯絡資訊，再推到 GitHub 即可。
