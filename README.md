# prom

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).



## 开发

```bash
# 克隆项目
git clone https://github.com/PanJiaChen/vue-element-admin.git

# 进入项目目录
cd activity-pintuan-admin

# 安装依赖
npm install

# 建议不要直接使用 cnpm 安装依赖，会有各种诡异的 bug。可以通过如下操作解决 npm 下载速度慢的问题
npm install --registry=https://registry.npm.taobao.org

# 启动服务
npm run server:dev
// 注意，开发配置
// 本地开发，测试环境命令
"serve:dev": "vue-cli-service serve --mode servedev",
// 本地开发，线上环境命令
"serve:prod": "vue-cli-service serve --mode serveprod",
```

浏览器访问 http://localhost:9527

## 发布

```bash
# 构建测试环境
npm run build:stage
# or
npm run build:dev

# 构建生产环境
npm run build:prod

// 注意，环境配置：
// 打包时 builddev 测试线上环境配置 ：.env.build
"build:dev": "vue-cli-service build --mode builddev",
// 打包生产环境 production： .env.production
"build:prod": "vue-cli-service build --mode production",

```

## 其它

```bash
# 预览发布环境效果
npm run preview

# 预览发布环境效果 + 静态资源分析
npm run preview -- --report

# 代码格式检查
npm run lint

# 代码格式检查并自动修复
npm run lint -- --fix

# npm install报错，core-js相关 可以使用下面命令修复
cnpm i core-js@2 --save

# vue-json-schema-editor-visual jsonschema编辑器
# 后端使用schema 版本过低，未找到完美对应的现有组件，clone了一个项目自己做适配
# https://github.com/giscafer/vue-json-schema-editor-visual

```


更多信息请参考 [使用文档](https://panjiachen.github.io/vue-element-admin-site/zh/)

# 项目目录结构
```
|-- activity-pintuan-admin
    |-- .editorconfig
    |-- .env.development
    |-- .env.builddev
    |-- .env.production
    |-- .env.servedev
    |-- .env.serveprod
    |-- .env.staging
    |-- .eslintignore
    |-- .eslintrc.js
    |-- .gitignore
    |-- .travis.yml
    |-- LICENSE
    |-- README.md
    |-- babel.config.js
    |-- jest.config.js
    |-- package.json
    |-- plopfile.js
    |-- postcss.config.js
    |-- vue.config.js
    |-- build
    |   |-- index.js
    |-- mock
    |   |-- article.js
    |   |-- index.js
    |   |-- mock-server.js
    |   |-- remote-search.js
    |   |-- user.js
    |   |-- role
    |       |-- index.js
    |       |-- routes.js
    |-- plop-templates
    |   |-- utils.js
    |   |-- component
    |   |   |-- index.hbs
    |   |   |-- prompt.js
    |   |-- view
    |       |-- index.hbs
    |       |-- prompt.js
    |-- public
    |   |-- .DS_Store
    |   |-- favicon.ico
    |   |-- index.html
    |-- src
    |   |-- .DS_Store
    |   |-- App.vue
    |   |-- main.js
    |   |-- permission.js
    |   |-- settings.js
    |   |-- api
    |   |   |-- article.js
    |   |   |-- demo.js
    |   |   |-- operation-center.js
    |   |   |-- qiniu.js
    |   |   |-- question-center.js
    |   |   |-- remote-search.js
    |   |   |-- role.js
    |   |   |-- user.js
    |   |-- assets
    |   |   |-- 401_images
    |   |   |   |-- 401.gif
    |   |   |-- 404_images
    |   |   |   |-- 404.png
    |   |   |   |-- 404_cloud.png
    |   |   |-- css
    |   |   |   |-- index.scss
    |   |   |-- custom-theme
    |   |       |-- index.css
    |   |       |-- fonts
    |   |           |-- element-icons.ttf
    |   |           |-- element-icons.woff
    |   |-- axios
    |   |   |-- envUrl.js
    |   |   |-- index.js
    |   |-- components
    |   |   |-- .DS_Store
    |   |   |-- BackToTop
    |   |   |   |-- index.vue
    |   |   |-- Breadcrumb
    |   |   |   |-- index.vue
    |   |   |-- Charts
    |   |   |   |-- Keyboard.vue
    |   |   |   |-- LineMarker.vue
    |   |   |   |-- MixChart.vue
    |   |   |   |-- mixins
    |   |   |       |-- resize.js
    |   |   |-- DndList
    |   |   |   |-- index.vue
    |   |   |-- DragSelect
    |   |   |   |-- index.vue
    |   |   |-- Dropzone
    |   |   |   |-- index.vue
    |   |   |-- ErrorLog
    |   |   |   |-- index.vue
    |   |   |-- GithubCorner
    |   |   |   |-- index.vue
    |   |   |-- Hamburger
    |   |   |   |-- index.vue
    |   |   |-- HeaderSearch
    |   |   |   |-- index.vue
    |   |   |-- ImageCropper
    |   |   |   |-- index.vue
    |   |   |   |-- utils
    |   |   |       |-- data2blob.js
    |   |   |       |-- effectRipple.js
    |   |   |       |-- language.js
    |   |   |       |-- mimes.js
    |   |   |-- JsonEditor
    |   |   |   |-- index.vue
    |   |   |-- Kanban
    |   |   |   |-- index.vue
    |   |   |-- Log
    |   |   |   |-- README.md
    |   |   |   |-- index.vue
    |   |   |-- MDinput
    |   |   |   |-- index.vue
    |   |   |-- MarkdownEditor
    |   |   |   |-- default-options.js
    |   |   |   |-- index.vue
    |   |   |-- Pagination
    |   |   |   |-- index.vue
    |   |   |-- PanThumb
    |   |   |   |-- index.vue
    |   |   |-- PreviewQuestion
    |   |   |   |-- dialog.vue
    |   |   |-- RightPanel
    |   |   |   |-- index.vue
    |   |   |-- Screenfull
    |   |   |   |-- index.vue
    |   |   |-- Share
    |   |   |   |-- DropdownMenu.vue
    |   |   |-- SizeSelect
    |   |   |   |-- index.vue
    |   |   |-- Sticky
    |   |   |   |-- index.vue
    |   |   |-- SvgIcon
    |   |   |   |-- index.vue
    |   |   |-- TextHoverEffect
    |   |   |   |-- Mallki.vue
    |   |   |-- ThemePicker
    |   |   |   |-- index.vue
    |   |   |-- Tinymce
    |   |   |   |-- dynamicLoadScript.js
    |   |   |   |-- index.vue
    |   |   |   |-- plugins.js
    |   |   |   |-- toolbar.js
    |   |   |   |-- components
    |   |   |       |-- EditorImage.vue
    |   |   |-- Upload
    |   |   |   |-- SingleImage.vue
    |   |   |   |-- SingleImage2.vue
    |   |   |   |-- SingleImage3.vue
    |   |   |-- UploadExcel
    |   |   |   |-- index.vue
    |   |   |-- VideoPlayer
    |   |       |-- index.vue
    |   |-- directive
    |   |   |-- sticky.js
    |   |   |-- clipboard
    |   |   |   |-- clipboard.js
    |   |   |   |-- index.js
    |   |   |-- el-drag-dialog
    |   |   |   |-- drag.js
    |   |   |   |-- index.js
    |   |   |-- el-table
    |   |   |   |-- adaptive.js
    |   |   |   |-- index.js
    |   |   |-- permission
    |   |   |   |-- index.js
    |   |   |   |-- permission.js
    |   |   |-- waves
    |   |       |-- index.js
    |   |       |-- waves.css
    |   |       |-- waves.js
    |   |-- filters
    |   |   |-- category.js
    |   |   |-- currency.js
    |   |   |-- date.js
    |   |   |-- index.js
    |   |   |-- mobile.js
    |   |   |-- secToTime.js
    |   |-- icons
    |   |   |-- index.js
    |   |   |-- svgo.yml
    |   |   |-- svg
    |   |       |-- 404.svg
    |   |       |-- bug.svg
    |   |       |-- chart.svg
    |   |       |-- clipboard.svg
    |   |       |-- component.svg
    |   |       |-- dashboard.svg
    |   |       |-- documentation.svg
    |   |       |-- drag.svg
    |   |       |-- edit.svg
    |   |       |-- education.svg
    |   |       |-- email.svg
    |   |       |-- example.svg
    |   |       |-- excel.svg
    |   |       |-- exit-fullscreen.svg
    |   |       |-- eye-open.svg
    |   |       |-- eye.svg
    |   |       |-- form.svg
    |   |       |-- fullscreen.svg
    |   |       |-- guide.svg
    |   |       |-- icon.svg
    |   |       |-- international.svg
    |   |       |-- language.svg
    |   |       |-- link.svg
    |   |       |-- list.svg
    |   |       |-- lock.svg
    |   |       |-- message.svg
    |   |       |-- money.svg
    |   |       |-- nested.svg
    |   |       |-- password.svg
    |   |       |-- pdf.svg
    |   |       |-- people.svg
    |   |       |-- peoples.svg
    |   |       |-- qq.svg
    |   |       |-- search.svg
    |   |       |-- shopping.svg
    |   |       |-- size.svg
    |   |       |-- skill.svg
    |   |       |-- star.svg
    |   |       |-- tab.svg
    |   |       |-- table.svg
    |   |       |-- theme.svg
    |   |       |-- tree-table.svg
    |   |       |-- tree.svg
    |   |       |-- user.svg
    |   |       |-- wechat.svg
    |   |       |-- zip.svg
    |   |-- layout
    |   |   |-- index.vue
    |   |   |-- components
    |   |   |   |-- AppMain.vue
    |   |   |   |-- Navbar.vue
    |   |   |   |-- index.js
    |   |   |   |-- Settings
    |   |   |   |   |-- index.vue
    |   |   |   |-- Sidebar
    |   |   |   |   |-- FixiOSBug.js
    |   |   |   |   |-- Item.vue
    |   |   |   |   |-- Link.vue
    |   |   |   |   |-- Logo.vue
    |   |   |   |   |-- SidebarItem.vue
    |   |   |   |   |-- index.vue
    |   |   |   |-- TagsView
    |   |   |       |-- ScrollPane.vue
    |   |   |       |-- index.vue
    |   |   |-- mixin
    |   |       |-- ResizeHandler.js
    |   |-- router
    |   |   |-- index.js
    |   |   |-- modules
    |   |       |-- charts.js
    |   |       |-- components.js
    |   |       |-- nested.js
    |   |       |-- table.js
    |   |-- store
    |   |   |-- getters.js
    |   |   |-- index.js
    |   |   |-- modules
    |   |       |-- app.js
    |   |       |-- errorLog.js
    |   |       |-- permission.js
    |   |       |-- settings.js
    |   |       |-- tagsView.js
    |   |       |-- user.js
    |   |       |-- business
    |   |       |   |-- dictionary
    |   |       |       |-- index.js
    |   |       |-- knowledge
    |   |       |   |-- dictionary
    |   |       |   |   |-- index.js
    |   |       |   |-- operationCenter
    |   |       |   |   |-- index.js
    |   |       |   |-- projectCenter
    |   |       |   |   |-- index.js
    |   |       |   |-- questionCenter
    |   |       |       |-- examination.js
    |   |       |       |-- index.js
    |   |       |-- order
    |   |           |-- dictionary
    |   |               |-- index.js
    |   |-- styles
    |   |   |-- btn.scss
    |   |   |-- element-ui.scss
    |   |   |-- element-variables.scss
    |   |   |-- index.scss
    |   |   |-- mixin.scss
    |   |   |-- reset.scss
    |   |   |-- sidebar.scss
    |   |   |-- transition.scss
    |   |   |-- variables.scss
    |   |-- utils
    |   |   |-- auth.js
    |   |   |-- clipboard.js
    |   |   |-- constant.js
    |   |   |-- error-log.js
    |   |   |-- get-page-title.js
    |   |   |-- index.js
    |   |   |-- md5.js
    |   |   |-- open-window.js
    |   |   |-- permission.js
    |   |   |-- request.js
    |   |   |-- scroll-to.js
    |   |   |-- validate.js
    |   |-- vendor
    |   |   |-- Export2Excel.js
    |   |   |-- Export2Zip.js
    |   |-- views
    |       |-- .DS_Store
    |       |-- cc-player
    |       |   |-- index.vue
    |       |-- course-center
    |       |   |-- teacher
    |       |       |-- index.vue
    |       |-- dashboard
    |       |   |-- index.vue
    |       |   |-- admin
    |       |   |   |-- index.vue
    |       |   |   |-- components
    |       |   |       |-- BarChart.vue
    |       |   |       |-- BoxCard.vue
    |       |   |       |-- LineChart.vue
    |       |   |       |-- PanelGroup.vue
    |       |   |       |-- PieChart.vue
    |       |   |       |-- RaddarChart.vue
    |       |   |       |-- TransactionTable.vue
    |       |   |       |-- TodoList
    |       |   |       |   |-- Todo.vue
    |       |   |       |   |-- index.scss
    |       |   |       |   |-- index.vue
    |       |   |       |-- mixins
    |       |   |           |-- resize.js
    |       |   |-- editor
    |       |       |-- index.vue
    |       |-- demo
    |       |   |-- list.vue
    |       |   |-- components
    |       |       |-- SelectedDialog.vue
    |       |-- error-log
    |       |   |-- index.vue
    |       |   |-- components
    |       |       |-- ErrorTestA.vue
    |       |       |-- ErrorTestB.vue
    |       |-- error-page
    |       |   |-- 401.vue
    |       |   |-- 404.vue
    |       |-- index
    |       |   |-- index.vue
    |       |-- login
    |       |   |-- auth-redirect.vue
    |       |   |-- index.vue
    |       |   |-- components
    |       |       |-- SocialSignin.vue
    |       |-- redirect
    |       |   |-- index.vue
    |       |-- system-business
    |       |   |-- api
    |       |   |   |-- dictionary
    |       |   |   |   |-- index.js
    |       |   |   |-- operation-center
    |       |   |       |-- advertisement.js
    |       |   |       |-- display-page-config.js
    |       |   |-- axios
    |       |   |   |-- index.js
    |       |   |-- components
    |       |   |   |-- Upload
    |       |   |       |-- SingleImage.vue
    |       |   |-- views
    |       |       |-- operation-center
    |       |           |-- advertisement
    |       |           |   |-- index.vue
    |       |           |   |-- components
    |       |           |       |-- EditModal.vue
    |       |           |-- display-page-config
    |       |               |-- index.vue
    |       |               |-- components
    |       |                   |-- EditModal.vue
    |       |-- system-channelboss
    |       |   |-- components
    |       |-- system-demo
    |       |   |-- api
    |       |   |   |-- dictionary
    |       |   |   |   |-- index.js
    |       |   |   |-- module-name
    |       |   |       |-- index.js
    |       |   |-- axios
    |       |   |   |-- index.js
    |       |   |-- views
    |       |       |-- operation-center
    |       |           |-- demo
    |       |               |-- index.vue
    |       |-- system-knowledge
    |       |   |-- api
    |       |   |   |-- course-center
    |       |   |   |   |-- audio.js
    |       |   |   |   |-- directory.js
    |       |   |   |   |-- live.js
    |       |   |   |   |-- materiel.js
    |       |   |   |   |-- record.js
    |       |   |   |   |-- teacher.js
    |       |   |   |-- dictionary
    |       |   |   |   |-- index.js
    |       |   |   |-- log
    |       |   |   |   |-- index.js
    |       |   |   |-- module-name
    |       |   |   |   |-- index.js
    |       |   |   |-- multimedia
    |       |   |   |   |-- index.js
    |       |   |   |-- operation-center
    |       |   |   |   |-- display-page-config.js
    |       |   |   |   |-- feedback.js
    |       |   |   |   |-- general-course-package.js
    |       |   |   |   |-- index.js
    |       |   |   |   |-- package.js
    |       |   |   |   |-- public-course.js
    |       |   |   |   |-- single-course-package.js
    |       |   |   |   |-- single-course.js
    |       |   |   |   |-- system-course.js
    |       |   |   |-- project-center
    |       |   |   |   |-- biz.js
    |       |   |   |   |-- category.js
    |       |   |   |   |-- index.js
    |       |   |   |   |-- knowledge.js
    |       |   |   |-- question-center
    |       |   |       |-- auto-generate-paper.js
    |       |   |       |-- chapter-practice.js
    |       |   |       |-- daily-practice.js
    |       |   |       |-- error-correction.js
    |       |   |       |-- examination.js
    |       |   |       |-- fractional-line.js
    |       |   |       |-- frequent-error.js
    |       |   |       |-- index.js
    |       |   |       |-- question.js
    |       |   |-- axios
    |       |   |   |-- index.js
    |       |   |-- components
    |       |   |   |-- AddCCVideo
    |       |   |   |   |-- AddVideoModal.vue
    |       |   |   |-- Upload
    |       |   |       |-- SingleImage.vue
    |       |   |       |-- UploadFile.vue
    |       |   |-- views
    |       |       |-- course-center
    |       |       |   |-- audio
    |       |       |   |   |-- directory.vue
    |       |       |   |   |-- index.vue
    |       |       |   |   |-- list.vue
    |       |       |   |   |-- components
    |       |       |   |       |-- AddAudio.vue
    |       |       |   |       |-- DetailDialog.vue
    |       |       |   |-- live
    |       |       |   |   |-- directory.vue
    |       |       |   |   |-- index.vue
    |       |       |   |   |-- list.vue
    |       |       |   |   |-- components
    |       |       |   |       |-- DetailDialog.vue
    |       |       |   |       |-- PlaybackDialog.vue
    |       |       |   |-- materiel
    |       |       |   |   |-- index.vue
    |       |       |   |   |-- components
    |       |       |   |       |-- DetailDialog.vue
    |       |       |   |-- record
    |       |       |   |   |-- directory.vue
    |       |       |   |   |-- index.vue
    |       |       |   |   |-- list.vue
    |       |       |   |   |-- components
    |       |       |   |       |-- DetailDialog.vue
    |       |       |   |-- teacher
    |       |       |       |-- index.vue
    |       |       |-- operation-center
    |       |       |   |-- custom-course-package
    |       |       |   |   |-- index.vue
    |       |       |   |   |-- list.vue
    |       |       |   |   |-- product.vue
    |       |       |   |   |-- components
    |       |       |   |       |-- AddDataDialog.vue
    |       |       |   |       |-- AddMultimediaDialog.vue
    |       |       |   |       |-- AddQuestionDialog.vue
    |       |       |   |       |-- BooksMaterialList.vue
    |       |       |   |       |-- DetailDialog.vue
    |       |       |   |       |-- EditPriceDialog.vue
    |       |       |   |       |-- MultimediaList.vue
    |       |       |   |       |-- QuestionList.vue
    |       |       |   |-- feedback
    |       |       |   |   |-- index.vue
    |       |       |   |   |-- components
    |       |       |   |       |-- EditModal.vue
    |       |       |   |-- general-course-package
    |       |       |   |   |-- index.vue
    |       |       |   |   |-- list.vue
    |       |       |   |   |-- product.vue
    |       |       |   |   |-- components
    |       |       |   |       |-- AddSinglePackageDialog.vue
    |       |       |   |       |-- DetailDialog.vue
    |       |       |   |       |-- EditPriceDialog.vue
    |       |       |   |       |-- SinglePackageList.vue
    |       |       |   |-- public-course
    |       |       |   |   |-- index.vue
    |       |       |   |   |-- components
    |       |       |   |       |-- SelectedLiveDialog.vue
    |       |       |   |       |-- SelectedRecordDialog.vue
    |       |       |   |-- single-course
    |       |       |   |   |-- index.vue
    |       |       |   |   |-- components
    |       |       |   |       |-- EditTimeDialog.vue
    |       |       |   |       |-- SelectedDialog.vue
    |       |       |   |-- single-course-package
    |       |       |   |   |-- index.vue
    |       |       |   |   |-- link-package.vue
    |       |       |   |   |-- list.vue
    |       |       |   |   |-- product.vue
    |       |       |   |   |-- components
    |       |       |   |       |-- AddDataDialog.vue
    |       |       |   |       |-- AddMultimediaDialog.vue
    |       |       |   |       |-- AddQuestionDialog.vue
    |       |       |   |       |-- AddSinglePackageDialog.vue
    |       |       |   |       |-- BooksMaterialList.vue
    |       |       |   |       |-- DetailDialog.vue
    |       |       |   |       |-- EditPriceDialog.vue
    |       |       |   |       |-- MultimediaList.vue
    |       |       |   |       |-- QuestionList.vue
    |       |       |   |       |-- SinglePackageList.vue
    |       |       |   |-- system-course
    |       |       |       |-- index.vue
    |       |       |       |-- list.vue
    |       |       |       |-- product.vue
    |       |       |       |-- components
    |       |       |           |-- AddGeneralPackageDialog.vue
    |       |       |           |-- AddSinglePackageDialog.vue
    |       |       |           |-- EditDetailDialog.vue
    |       |       |           |-- EditPriceDialog.vue
    |       |       |           |-- EditTimeDialog.vue
    |       |       |           |-- PackageList.vue
    |       |       |-- project-center
    |       |       |   |-- biz
    |       |       |   |   |-- associateCategory.vue
    |       |       |   |   |-- index.vue
    |       |       |   |   |-- list.vue
    |       |       |   |-- category
    |       |       |   |   |-- index.vue
    |       |       |   |   |-- components
    |       |       |   |       |-- SelectQuestionTypeModal.vue
    |       |       |   |-- knowledge
    |       |       |       |-- index.vue
    |       |       |       |-- components
    |       |       |           |-- EditModal.vue
    |       |       |           |-- RightList.vue
    |       |       |           |-- VideoListModal.vue
    |       |       |-- question-center
    |       |           |-- auto-generate-paper
    |       |           |   |-- index.vue
    |       |           |   |-- components
    |       |           |       |-- ConfigurePaper.vue
    |       |           |-- chapter-practice
    |       |           |   |-- edit.vue
    |       |           |   |-- index.vue
    |       |           |   |-- list.vue
    |       |           |   |-- components
    |       |           |       |-- DetailModal.vue
    |       |           |       |-- QuestionList.vue
    |       |           |-- daily-practice
    |       |           |   |-- index.vue
    |       |           |-- error-correction
    |       |           |   |-- index.vue
    |       |           |-- examination
    |       |           |   |-- examinationQuestion.vue
    |       |           |   |-- index.vue
    |       |           |   |-- list.vue
    |       |           |   |-- components
    |       |           |       |-- CommonQuestion.vue
    |       |           |       |-- EQDetailModel.vue
    |       |           |       |-- ParentQuestion.vue
    |       |           |-- fractional-line
    |       |           |   |-- index.vue
    |       |           |-- frequent-error
    |       |           |   |-- index.vue
    |       |           |   |-- components
    |       |           |       |-- ErrorData.vue
    |       |           |-- preview-question
    |       |           |   |-- index.vue
    |       |           |-- question
    |       |               |-- index.vue
    |       |               |-- components
    |       |                   |-- CaseQuestion.vue
    |       |                   |-- ChoiceQuestion.vue
    |       |                   |-- DetailModal.vue
    |       |                   |-- ImportQuestionModal.vue
    |       |                   |-- List.vue
    |       |                   |-- ListModal.vue
    |       |                   |-- ParentQuestion.vue
    |       |                   |-- QuestionTypeList.vue
    |       |                   |-- SelectQuestionTypeModal.vue
    |       |-- system-order
    |       |   |-- api
    |       |   |   |-- dictionary
    |       |   |   |   |-- index.js
    |       |   |   |-- order-center
    |       |   |       |-- index.js
    |       |   |       |-- order.js
    |       |   |-- axios
    |       |   |   |-- index.js
    |       |   |-- views
    |       |       |-- order-center
    |       |           |-- order
    |       |               |-- index.vue
    |       |               |-- list.vue
    |       |               |-- components
    |       |                   |-- DetailDialog.vue
    |       |-- system-payboss
    |       |   |-- components
    |       |   |-- views
    |       |       |-- partner-center
    |       |           |-- partner
    |       |           |-- partner-promotion
    |       |-- system-umpboss
    |           |-- api
    |           |   |-- dictionary
    |           |   |   |-- index.js
    |           |   |-- module-name
    |           |       |-- index.js
    |           |-- axios
    |           |   |-- index.js
    |           |-- views
    |               |-- operation-center
    |                   |-- activity
    |                   |   |-- detail-dialog.vue
    |                   |   |-- detail-list.vue
    |                   |   |-- index.vue
    |                   |-- common
    |                   |   |-- log.vue
    |                   |   |-- upload-img.vue
    |                   |-- js
    |                   |   |-- act-dict.js
    |                   |   |-- constant.js
    |                   |   |-- interface.js
    |                   |-- prize
    |                       |-- index.vue
    |-- tests
        |-- unit
            |-- .eslintrc.js
            |-- example.spec.js
            |-- components
            |   |-- Hamburger.spec.js
            |   |-- SvgIcon.spec.js
            |-- utils
                |-- formatTime.spec.js
                |-- parseTime.spec.js
                |-- validate.spec.js
```
