# 網站內容替換說明

這份網站已經做成一個可直接延伸的首頁原型。若你接下來想把示意內容替換成你自己的資料，最重要的修改位置集中在 **`client/src/pages/Home.tsx`**，因為目前首頁的主要文字、案例、數據、按鈕與連結都整理成可讀性較高的資料陣列與區塊內容。你不需要從頭改整個網站，通常只要改幾段文字與幾個連結，就能把它變成正式版本。

## 一、你最先需要改的四個地方

| 優先順序 | 要改的內容 | 檔案位置 | 原因 |
| --- | --- | --- | --- |
| 1 | Email、LinkedIn、履歷按鈕 | `client/src/pages/Home.tsx` | 這些目前仍是示意值 |
| 2 | Hero 主標與副標 | `client/src/pages/Home.tsx` | 這會直接影響首頁第一印象 |
| 3 | Metrics 與 Expertise | `client/src/pages/Home.tsx` | 這決定你的專業定位是否清楚 |
| 4 | Featured Work 三張案例卡 | `client/src/pages/Home.tsx` | 這是最能建立可信度的區塊 |

## 二、首頁主要內容在哪裡改

在 `Home.tsx` 開頭，你會看到幾個資料區塊：`metrics`、`expertise`、`featuredWork`、`insights` 與 `navItems`。這些陣列就是首頁各模組的內容來源，因此你只要改陣列裡的文字，就能改掉對應區塊的內容。

| 區塊名稱 | 對應變數 | 建議你怎麼改 |
| --- | --- | --- |
| 數據區塊 | `metrics` | 把數值與說明換成你的真實年資、專案、研究、技術跨度 |
| 能力區塊 | `expertise` | 改成你最想突出的 4 個專業能力 |
| 案例區塊 | `featuredWork` | 每張卡片換成你的代表經歷、研究或作品 |
| 洞察區塊 | `insights` | 可換成你的觀點，也可整段刪除 |
| 導覽列 | `navItems` | 若你新增內頁或改 section 名稱，可同步更新 |

## 三、Hero 區塊怎麼換成你的正式版本

首頁最上方最重要的是 Hero 區塊。你現在看到的標題是：

> Engineering reliable systems across software and operations.

這段在 `Home.tsx` 裡直接寫在 `<h1>` 中。你可以把它改成更貼近你自己的版本，例如：

| 用途 | 建議寫法方向 |
| --- | --- |
| 若你想偏工程品牌感 | Systems Integration for Scalable Infrastructure |
| 若你想偏個人專業形象 | Software Engineer bridging systems, process, and operations |
| 若你想偏研究與工程整合 | Engineering across software, control, and environmental systems |

Hero 下方的副標同樣可以直接改成你自己的描述。建議保留 1 至 2 句即可，不要寫太長，因為首屏的任務是快速說清楚你是誰與你做什麼。

## 四、按鈕與聯絡方式怎麼改

目前首頁有幾個示意連結，這些你應該優先替換。

| 現況 | 建議替換成什麼 | 修改位置 |
| --- | --- | --- |
| `mailto:otis@example.com` | 你的真實 Email | `Home.tsx` 的 Contact 區塊 |
| `https://www.linkedin.com/` | 你的 LinkedIn 公開網址 | `Home.tsx` 的 Contact 區塊 |
| `Download resume` 按鈕目前只是提示訊息 | 改成你的履歷 PDF 連結或 Google Drive 連結 | `Home.tsx` Hero 區塊 |
| `Replace this CTA` 按鈕 | 可改成 Calendly、Notion、作品集、履歷下載 | `Home.tsx` Contact 區塊 |

如果你已經有 PDF 履歷，最簡單的方式是把 PDF 放到可公開存取的位置，然後將按鈕的 `onClick` 改成 `window.open("你的履歷連結")`。

## 五、案例卡片怎麼改

首頁的案例區塊目前有三張卡片，資料來自 `featuredWork` 陣列。每張卡片都有：標題、副標、說明、圖片與標籤。這是最容易替換也最值得優先優化的地方。

每張卡片你可以依照下面格式思考：

| 欄位 | 建議內容 |
| --- | --- |
| `title` | 專案名稱或經驗名稱 |
| `subtitle` | 一句情境描述，例如國際專案、研究成果、系統改造 |
| `description` | 2 至 3 句摘要，包含你做了什麼與其價值 |
| `tags` | 3 個左右關鍵詞，例如 Python、Systems Control、Wastewater |
| `image` | 對應案例圖片 |

如果你之後想把每張卡片連到獨立頁面，也可以再加上 `href` 欄位，然後把卡片外層改成連結元件。

## 六、圖片怎麼換

目前首頁主要使用四張已生成的網站圖片，分別對應 Hero、能力區塊、案例區塊與 Vision 區塊。這些圖片網址目前直接寫在 `Home.tsx` 最上方的常數裡：

| 常數名稱 | 用途 |
| --- | --- |
| `heroImage` | 首屏大圖 |
| `expertiseImage` | 能力區塊圖 |
| `wastewaterImage` | 案例圖 |
| `visionImage` | Vision 區塊圖 |

你如果要替換圖片，有兩種方式。第一種是直接把這些網址換成新的圖片網址；第二種是保留現在的圖，等你後續整理出正式圖片後再替換。若你繼續在這個專案中開發，建議仍使用與目前風格一致的工程、設備、控制系統、城市基礎設施或抽象資料視覺，不要突然改成生活照或旅遊照，否則整體品牌語氣會被打散。

## 七、如果你要把 Life / Movies 放回網站，建議怎麼做

這次首頁已經刻意把 Life 類內容降權，因為首頁現在的主要任務是建立專業形象。如果你還是想保留電影或個人興趣內容，我建議不要放回首頁中段，而是另外做成 `life` 或 `insights` 頁面，再從導覽列或頁尾連過去。這樣可以同時保留個人辨識度與專業首頁的清楚度。

## 八、如果你要改成完全屬於你的版本，建議替換順序

| 順序 | 任務 | 理由 |
| --- | --- | --- |
| 1 | 換 Email、LinkedIn、履歷連結 | 先讓網站可對外使用 |
| 2 | 改 Hero 標題與副標 | 先修正第一印象 |
| 3 | 改 Metrics 與 Expertise | 讓定位更準確 |
| 4 | 改 Featured Work | 提升可信度 |
| 5 | 改 Vision 與 Insights | 加入你的個人方向 |
| 6 | 決定是否新增 Work / Life 獨立頁 | 第二階段再做即可 |

## 九、如果你要直接接回你原本的 GitHub Pages repo

這份網站目前是一個新的前端專案原型。如果你想把它用到你原本的 GitHub Pages 網站上，有兩條路。

| 方式 | 適合情況 |
| --- | --- |
| 直接沿用這個新專案繼續開發 | 你想保留現在的 React + Tailwind 結構與視覺系統 |
| 只參考這份網站的 section 與文案，把內容搬回你原本的靜態 HTML repo | 你想維持舊 repo 的部署方式與檔案結構 |

若你想省時間，我比較建議你直接沿用這個新版本再微調內容，因為版型、層級與圖片都已經整理好了。

## 十、最重要的一句話

> 若你只想先把網站快速變成可用版本，請先改 `Home.tsx` 裡的 **Email、LinkedIn、Hero 文案、Metrics、Featured Work**。光完成這幾項，網站就已經會很接近正式版。
