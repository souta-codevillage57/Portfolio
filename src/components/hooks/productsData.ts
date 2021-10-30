import ProductImage1 from "../../img/productImg/ProductImage1.png"
import ProductImage2 from "../../img/productImg/ProductImage2.png"
import ProductImage3 from "../../img/productImg/ProductImage3.png"
import ProductImage4 from "../../img/productImg/ProductImage4.png"
import ProductImage5 from "../../img/productImg/ProductImage5.png"
import ProductImage6 from "../../img/productImg/ProductImage6.png"
import ProductImage7 from "../../img/productImg/ProductImage7.png"

export const ProductsData = [
    {
        imageUrl: `${ProductImage1}`,
        product: "Webサイト",
        language: "(HTML,CSS)",
        content: "様々なスタイルを当て方を学びました。スタイルに統一感を持たせることが大変でした。",
        productUrl: "https://souta-takahashi-website.herokuapp.com/",
        source: "https://github.com/souta-codevillage57/website.git"
    },
    {
        imageUrl: `${ProductImage2}`,
        product: "レスポンシブなWebサイト",
        language: "(HTML,CSS,Sass)",
        content: "レスポンシブな動きにスタイルを対応させるのが大変でした。",
        productUrl: "https://souta-takahashi-responsive.herokuapp.com/",
        source: "https://github.com/souta-codevillage57/responsive.git"
    },
    {
        imageUrl: `${ProductImage3}`,
        product: "まるばつゲーム",
        language: "(HTML,CSS,JavaScript)",
        content: "DOMの操作やJSの構文を組み合わせて動的な実装をするのが大変でした。",
        productUrl: "https://souta-takahashi-marubatsu.herokuapp.com/",
        source: "https://github.com/souta-codevillage57/marubatsu.git"
    },
    {
        imageUrl: `${ProductImage4}`,
        product: "ToDoアプリ",
        language: "(React)",
        content: "コンポーネント分割を意識することやuseStateの使い方などを学びました。",
        productUrl: "https://souta-takahashi-todoapp.herokuapp.com/",
        source: "https://github.com/souta-codevillage57/todoapp.git"
    },
    {
        imageUrl: `${ProductImage5}`,
        product: "チャットアプリ",
        language: "(React,Firebase,ChakraUi)",
        content: "react-router-domによるSPA、Firebaseの導入、ReactHooks、ChakraUiの使い方、Atomic Designを学びました。",
        productUrl: "https://chat-app-one-lake.vercel.app/",
        source: "https://github.com/souta-codevillage57/chatapp.git"
    },
    {
        imageUrl: `${ProductImage6}`,
        product: "ユーザー管理アプリ",
        language: "(React,Typescript,ChakraUi)",
        content: "ユーザーIDは1~10です。APIからデータを取得・参照することや基本的なTypescriptの型定義を学びました。",
        productUrl: "https://user-admin-app.vercel.app/",
        source: "https://github.com/souta-codevillage57/user-admin-app.git"
    },
    {
        imageUrl: `${ProductImage7}`,
        product: "ポートフォリオサイト",
        language: "(React,Typescript,ChakraUi)",
        content: "UI構築を意識しました。デザインを考えること、デプロイのやり方に苦戦しました。",
        productUrl: "https://souta-takahashi-portfolio.herokuapp.com/",
        source: "https://github.com/souta-codevillage57/Portfolio.git"
    }
]