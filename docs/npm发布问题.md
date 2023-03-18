# 将 react/vue 发布到npm中

1. ### 基础命令

   1. 登陆：`npm login`

   2. 升级版本`npm version`

      - <newversion>
      -  major  如果没有prelease，则直接升级major，其他位都置为0；  `3.1.0` -->`4.0.0`
      - minor 如果没有prerelease，直接升级minor， 同时patch设置为0；`2.0.1` -->`2.1.0`;
      -  patch - 如果有prerelease ，则去掉prerelease ，其他保持不变；如果没有prerelease ，则升级minor。 `2.0.0-0` --> `2.0.0`; `2.0.0` --> `2.0.1`;
      - premajor \- 直接升级大号，中号、小号置为0，增加预发布号为0。`1.1.0-0` --> `2.0.0-0`
      - preminor -  直接升级中号，小号置为0，增加预发布号为0。 `1.0.2-0` --> `1.1.0-0` 
      - prepatch - 直接升级小号，增加预发布号为0。`1.0.1-1` --> `1.0.2-0`
      -  prerelease [--preid=<prerelease-id>] - 如果没有预发布号，则增加minor，同时prerelease 设为0；如果有prerelease， 则prerelease 增加1。`1.0.0` --> `1.0.1-0` 
      - from-git

   3. 发布标签`npm publish --tag` [beta]

      - latest：最后版本，npm install的就是这个

      - beta：测试版本，一般内测使用，需要指定版本号install，例如3.1.0-beta.0

      - next: 先行版本，npm install foo@next安装，例如3.0.2-alpha.0

        (git标签 : git tag version)