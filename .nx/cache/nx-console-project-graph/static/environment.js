window.exclude = [];
  window.watch = false;
  window.environment = 'release';
  window.localMode = 'build';

  window.appConfig = {
    showDebugger: false,
    showExperimentalFeatures: false,
    workspaces: [
      {
        id: 'local',
        label: 'local',
        projectGraphUrl: 'project-graph.json',
        taskGraphUrl: 'task-graph.json'
      }
    ],
    defaultWorkspaceId: 'local',
  };
  window.projectGraphResponse = {"hash":"3f79f17c092c74395c6848ad2e4c6a48eac3f12e86f7888b5a92d9796251db02","projects":[{"name":"angular-nxpoc-e2e","type":"e2e","data":{"name":"angular-nxpoc-e2e","root":"apps/angular-nxpoc-e2e","$schema":"../../node_modules/nx/schemas/project-schema.json","sourceRoot":"apps/angular-nxpoc-e2e/src","projectType":"application","targets":{"e2e":{"inputs":["default","^production"],"executor":"@nx/cypress:cypress","options":{"cypressConfig":"apps/angular-nxpoc-e2e/cypress.config.ts","devServerTarget":"angular-nxpoc:serve:development","testingType":"e2e"},"configurations":{"production":{"devServerTarget":"angular-nxpoc:serve:production"},"ci":{"devServerTarget":"angular-nxpoc:serve-static"}}},"lint":{"inputs":["default","{workspaceRoot}/.eslintrc.json","{workspaceRoot}/.eslintignore","{workspaceRoot}/eslint.config.js"],"executor":"@nx/linter:eslint","outputs":["{options.outputFile}"],"options":{"lintFilePatterns":["apps/angular-nxpoc-e2e/**/*.{js,ts}"]},"configurations":{}}},"tags":[],"implicitDependencies":["angular-nxpoc"]}},{"name":"angular-nxpoc","type":"app","data":{"name":"angular-nxpoc","root":"apps/angular-nxpoc","$schema":"../../node_modules/nx/schemas/project-schema.json","projectType":"application","prefix":"angular-nxpoc","sourceRoot":"apps/angular-nxpoc/src","tags":[],"targets":{"build":{"dependsOn":["^build"],"inputs":["production","^production"],"executor":"@angular-devkit/build-angular:browser","outputs":["{options.outputPath}"],"options":{"outputPath":"dist/apps/angular-nxpoc","index":"apps/angular-nxpoc/src/index.html","main":"apps/angular-nxpoc/src/main.ts","polyfills":["zone.js"],"tsConfig":"apps/angular-nxpoc/tsconfig.app.json","assets":["apps/angular-nxpoc/src/favicon.ico","apps/angular-nxpoc/src/assets"],"styles":["@angular/material/prebuilt-themes/pink-bluegrey.css","apps/angular-nxpoc/src/styles.css"],"scripts":[]},"configurations":{"production":{"budgets":[{"type":"initial","maximumWarning":"500kb","maximumError":"1mb"},{"type":"anyComponentStyle","maximumWarning":"2kb","maximumError":"4kb"}],"outputHashing":"all"},"development":{"buildOptimizer":false,"optimization":false,"vendorChunk":true,"extractLicenses":false,"sourceMap":true,"namedChunks":true}},"defaultConfiguration":"production"},"serve":{"executor":"@angular-devkit/build-angular:dev-server","configurations":{"production":{"browserTarget":"angular-nxpoc:build:production"},"development":{"browserTarget":"angular-nxpoc:build:development"}},"defaultConfiguration":"development","options":{}},"extract-i18n":{"executor":"@angular-devkit/build-angular:extract-i18n","options":{"browserTarget":"angular-nxpoc:build"},"configurations":{}},"lint":{"inputs":["default","{workspaceRoot}/.eslintrc.json","{workspaceRoot}/.eslintignore","{workspaceRoot}/eslint.config.js"],"executor":"@nx/linter:eslint","outputs":["{options.outputFile}"],"options":{"lintFilePatterns":["apps/angular-nxpoc/**/*.ts","apps/angular-nxpoc/**/*.html"]},"configurations":{}},"test":{"inputs":["default","^production","{workspaceRoot}/jest.preset.js"],"executor":"@nx/jest:jest","outputs":["{workspaceRoot}/coverage/{projectRoot}"],"options":{"jestConfig":"apps/angular-nxpoc/jest.config.ts","passWithNoTests":true},"configurations":{"ci":{"ci":true,"codeCoverage":true}}},"serve-static":{"executor":"@nx/web:file-server","options":{"buildTarget":"angular-nxpoc:build"},"configurations":{}}},"implicitDependencies":[]}}],"dependencies":{"angular-nxpoc-e2e":[{"source":"angular-nxpoc-e2e","target":"angular-nxpoc","type":"implicit"}],"angular-nxpoc":[]},"fileMap":{"angular-nxpoc":[{"file":"apps/angular-nxpoc/.eslintrc.json","hash":"15885134675351674446"},{"file":"apps/angular-nxpoc/jest.config.ts","hash":"2266045571243665499"},{"file":"apps/angular-nxpoc/project.json","hash":"6578560462923059087"},{"file":"apps/angular-nxpoc/src/app/Components/AppMainContent/app-main-content.component.css","hash":"3244421341483603138"},{"file":"apps/angular-nxpoc/src/app/Components/AppMainContent/app-main-content.component.html","hash":"3251618498649444836"},{"file":"apps/angular-nxpoc/src/app/Components/AppMainContent/app-main-content.component.spec.ts","hash":"2890117349117573902","deps":["npm:@angular/core"]},{"file":"apps/angular-nxpoc/src/app/Components/AppMainContent/app-main-content.component.ts","hash":"13221220498446161497","deps":["npm:@angular/core","npm:@angular/common","npm:@angular/router"]},{"file":"apps/angular-nxpoc/src/app/Components/Footer/footer.component.css","hash":"3244421341483603138"},{"file":"apps/angular-nxpoc/src/app/Components/Footer/footer.component.html","hash":"12965503917554229835"},{"file":"apps/angular-nxpoc/src/app/Components/Footer/footer.component.spec.ts","hash":"4868890553554519911","deps":["npm:@angular/core"]},{"file":"apps/angular-nxpoc/src/app/Components/Footer/footer.component.ts","hash":"10179046017004165964","deps":["npm:@angular/core","npm:@angular/common"]},{"file":"apps/angular-nxpoc/src/app/Components/Header/header.component.css","hash":"3244421341483603138"},{"file":"apps/angular-nxpoc/src/app/Components/Header/header.component.html","hash":"17468333644448113411"},{"file":"apps/angular-nxpoc/src/app/Components/Header/header.component.spec.ts","hash":"246408304213996698","deps":["npm:@angular/core"]},{"file":"apps/angular-nxpoc/src/app/Components/Header/header.component.ts","hash":"6448559120200097026","deps":["npm:@angular/core","npm:@angular/common","npm:@angular/material","npm:@angular/router"]},{"file":"apps/angular-nxpoc/src/app/Components/Header/header.route.ts","hash":"1346812586572864845","deps":["npm:@angular/router"]},{"file":"apps/angular-nxpoc/src/app/Components/Login/login.component.css","hash":"3244421341483603138"},{"file":"apps/angular-nxpoc/src/app/Components/Login/login.component.html","hash":"10202853055338122992"},{"file":"apps/angular-nxpoc/src/app/Components/Login/login.component.spec.ts","hash":"14286510909486102227","deps":["npm:@angular/core"]},{"file":"apps/angular-nxpoc/src/app/Components/Login/login.component.ts","hash":"8124052407757998925","deps":["npm:@angular/core","npm:@angular/common","npm:@angular/material","npm:@angular/forms","npm:@angular/router"]},{"file":"apps/angular-nxpoc/src/app/Components/ProductDescription/product-description.component.css","hash":"3244421341483603138"},{"file":"apps/angular-nxpoc/src/app/Components/ProductDescription/product-description.component.html","hash":"16975201006429809405"},{"file":"apps/angular-nxpoc/src/app/Components/ProductDescription/product-description.component.spec.ts","hash":"14323749108988768627","deps":["npm:@angular/core"]},{"file":"apps/angular-nxpoc/src/app/Components/ProductDescription/product-description.component.ts","hash":"18003589223616094570","deps":["npm:@angular/core","npm:@angular/common","npm:@angular/router","npm:@angular/material"]},{"file":"apps/angular-nxpoc/src/app/Components/ProductsList/products-list.component.css","hash":"15036214574332298676"},{"file":"apps/angular-nxpoc/src/app/Components/ProductsList/products-list.component.html","hash":"13385937725487567761"},{"file":"apps/angular-nxpoc/src/app/Components/ProductsList/products-list.component.spec.ts","hash":"13550499251291971050","deps":["npm:@angular/core"]},{"file":"apps/angular-nxpoc/src/app/Components/ProductsList/products-list.component.ts","hash":"6429876547721116220","deps":["npm:@angular/core","npm:@angular/common","npm:rxjs"]},{"file":"apps/angular-nxpoc/src/app/Components/SharedComponents/Button/button.component.css","hash":"5065824335905233940"},{"file":"apps/angular-nxpoc/src/app/Components/SharedComponents/Button/button.component.html","hash":"14228215677646590730"},{"file":"apps/angular-nxpoc/src/app/Components/SharedComponents/Button/button.component.spec.ts","hash":"4371689863434983961","deps":["npm:@angular/core"]},{"file":"apps/angular-nxpoc/src/app/Components/SharedComponents/Button/button.component.ts","hash":"3848211212240685813","deps":["npm:@angular/core","npm:@angular/common","npm:@angular/material"]},{"file":"apps/angular-nxpoc/src/app/Components/SharedComponents/Card/card.component.css","hash":"7659060357660978613"},{"file":"apps/angular-nxpoc/src/app/Components/SharedComponents/Card/card.component.html","hash":"16225661895721332513"},{"file":"apps/angular-nxpoc/src/app/Components/SharedComponents/Card/card.component.spec.ts","hash":"10774891835369840542","deps":["npm:@angular/core"]},{"file":"apps/angular-nxpoc/src/app/Components/SharedComponents/Card/card.component.ts","hash":"1345935851213631708","deps":["npm:@angular/core","npm:@angular/common","npm:@angular/material","npm:@angular/router"]},{"file":"apps/angular-nxpoc/src/app/Components/SharedComponents/SnackBarWrapper/snack-bar-wrapper.component.css","hash":"14345970603366679250"},{"file":"apps/angular-nxpoc/src/app/Components/SharedComponents/SnackBarWrapper/snack-bar-wrapper.component.html","hash":"16188296781642844719"},{"file":"apps/angular-nxpoc/src/app/Components/SharedComponents/SnackBarWrapper/snack-bar-wrapper.component.spec.ts","hash":"9284117998380681967","deps":["npm:@angular/core"]},{"file":"apps/angular-nxpoc/src/app/Components/SharedComponents/SnackBarWrapper/snack-bar-wrapper.component.ts","hash":"2343016172240501754","deps":["npm:@angular/core","npm:@angular/common","npm:@angular/material"]},{"file":"apps/angular-nxpoc/src/app/Components/SignUp/sign-up.component.css","hash":"3244421341483603138"},{"file":"apps/angular-nxpoc/src/app/Components/SignUp/sign-up.component.html","hash":"10895999018847718121"},{"file":"apps/angular-nxpoc/src/app/Components/SignUp/sign-up.component.spec.ts","hash":"11189520064431419247","deps":["npm:@angular/core"]},{"file":"apps/angular-nxpoc/src/app/Components/SignUp/sign-up.component.ts","hash":"16434016019527167367","deps":["npm:@angular/core","npm:@angular/common","npm:@angular/material","npm:@angular/forms","npm:@angular/router"]},{"file":"apps/angular-nxpoc/src/app/Components/VerifyEmail/verify-email.component.css","hash":"3244421341483603138"},{"file":"apps/angular-nxpoc/src/app/Components/VerifyEmail/verify-email.component.html","hash":"16571749758263433446"},{"file":"apps/angular-nxpoc/src/app/Components/VerifyEmail/verify-email.component.spec.ts","hash":"4545743107534532203","deps":["npm:@angular/core"]},{"file":"apps/angular-nxpoc/src/app/Components/VerifyEmail/verify-email.component.ts","hash":"13627554408202778319","deps":["npm:@angular/core","npm:@angular/common","npm:@angular/router"]},{"file":"apps/angular-nxpoc/src/app/Constants/static.ts","hash":"246872079607106444"},{"file":"apps/angular-nxpoc/src/app/Environment/environment.firebase.ts","hash":"17212394184870469720"},{"file":"apps/angular-nxpoc/src/app/Models/product.modal.ts","hash":"11542769653712592227"},{"file":"apps/angular-nxpoc/src/app/Models/staticKey.modal.ts","hash":"14624513471672069297"},{"file":"apps/angular-nxpoc/src/app/Services/AuthService/auth-service.service.spec.ts","hash":"3226961743523345164","deps":["npm:@angular/core"]},{"file":"apps/angular-nxpoc/src/app/Services/AuthService/auth-service.service.ts","hash":"5540701190555232827","deps":["npm:@angular/core","npm:@angular/fire","npm:@angular/router"]},{"file":"apps/angular-nxpoc/src/app/Services/SharedServices/snack-bar.service.spec.ts","hash":"8086128884955454871","deps":["npm:@angular/core"]},{"file":"apps/angular-nxpoc/src/app/Services/SharedServices/snack-bar.service.ts","hash":"10622349798320385264","deps":["npm:@angular/core","npm:@angular/material"]},{"file":"apps/angular-nxpoc/src/app/Services/add-cart.service.spec.ts","hash":"9177063801023094254","deps":["npm:@angular/core"]},{"file":"apps/angular-nxpoc/src/app/Services/add-cart.service.ts","hash":"16777709888929293012","deps":["npm:@angular/core","npm:rxjs"]},{"file":"apps/angular-nxpoc/src/app/Services/product-info.service.spec.ts","hash":"3468975813863293256","deps":["npm:@angular/core"]},{"file":"apps/angular-nxpoc/src/app/Services/product-info.service.ts","hash":"1144525720832553683","deps":["npm:@angular/common","npm:@angular/core","npm:rxjs"]},{"file":"apps/angular-nxpoc/src/app/app.component.css","hash":"3244421341483603138"},{"file":"apps/angular-nxpoc/src/app/app.component.html","hash":"3256591147827043446"},{"file":"apps/angular-nxpoc/src/app/app.component.spec.ts","hash":"14884218730420044484","deps":["npm:@angular/core","npm:@angular/router"]},{"file":"apps/angular-nxpoc/src/app/app.component.ts","hash":"13958040805318220479","deps":["npm:@angular/core","npm:@angular/router","npm:@angular/material"]},{"file":"apps/angular-nxpoc/src/app/app.config.ts","hash":"16145464253417839764","deps":["npm:@angular/core","npm:@angular/router","npm:@angular/platform-browser","npm:@angular/common","npm:@angular/material","npm:@angular/fire"]},{"file":"apps/angular-nxpoc/src/app/app.routes.ts","hash":"5457397410080102111","deps":["npm:@angular/router"]},{"file":"apps/angular-nxpoc/src/app/nx-welcome.component.ts","hash":"8930661984358867710","deps":["npm:@angular/core","npm:@angular/common"]},{"file":"apps/angular-nxpoc/src/assets/.gitkeep","hash":"3244421341483603138"},{"file":"apps/angular-nxpoc/src/favicon.ico","hash":"9303420814833116677"},{"file":"apps/angular-nxpoc/src/index.html","hash":"16130126387092233492"},{"file":"apps/angular-nxpoc/src/main.ts","hash":"875041330523952236","deps":["npm:@angular/platform-browser"]},{"file":"apps/angular-nxpoc/src/styles.css","hash":"4990897492578484883"},{"file":"apps/angular-nxpoc/src/test-setup.ts","hash":"10765977267162271731","deps":["npm:jest-preset-angular"]},{"file":"apps/angular-nxpoc/tailwind.config.js","hash":"18387816268718264085","deps":["npm:@nx/angular","npm:path","npm:../../tailwind.config"]},{"file":"apps/angular-nxpoc/tsconfig.app.json","hash":"15840844869456775012"},{"file":"apps/angular-nxpoc/tsconfig.editor.json","hash":"6816855480324741077"},{"file":"apps/angular-nxpoc/tsconfig.json","hash":"17021277375021554599"},{"file":"apps/angular-nxpoc/tsconfig.spec.json","hash":"1930986853382524452"},{"file":"apps/angular-nxpoc/src/app/Cart/cart.component.css","hash":"3244421341483603138"},{"file":"apps/angular-nxpoc/src/app/Cart/cart.component.ts","hash":"15469696736347021740","deps":["npm:@angular/core","npm:@angular/common"]},{"file":"apps/angular-nxpoc/src/app/Cart/cart.component.spec.ts","hash":"4258386838848462397","deps":["npm:@angular/core"]},{"file":"apps/angular-nxpoc/src/app/Cart/cart.component.html","hash":"4466039197836664307"}],"angular-nxpoc-e2e":[{"file":"apps/angular-nxpoc-e2e/.eslintrc.json","hash":"10799368048025705622"},{"file":"apps/angular-nxpoc-e2e/cypress.config.ts","hash":"10128070837426886452","deps":["npm:cypress","npm:@nx/cypress"]},{"file":"apps/angular-nxpoc-e2e/project.json","hash":"15664035191597353015"},{"file":"apps/angular-nxpoc-e2e/src/e2e/app.cy.ts","hash":"5516205777152741121"},{"file":"apps/angular-nxpoc-e2e/src/fixtures/example.json","hash":"17341819486505642070"},{"file":"apps/angular-nxpoc-e2e/src/support/app.po.ts","hash":"5364106453863571025"},{"file":"apps/angular-nxpoc-e2e/src/support/commands.ts","hash":"11031723810997510506"},{"file":"apps/angular-nxpoc-e2e/src/support/e2e.ts","hash":"15928825062325902088"},{"file":"apps/angular-nxpoc-e2e/tsconfig.json","hash":"15819154737716378212"}]},"layout":{"appsDir":"apps","libsDir":"libs"},"affected":[],"focus":null,"groupByFolder":false,"exclude":[]};
    window.taskGraphResponse = {"taskGraphs":{"angular-nxpoc-e2e:e2e":{"roots":["angular-nxpoc-e2e:e2e"],"tasks":{"angular-nxpoc-e2e:e2e":{"id":"angular-nxpoc-e2e:e2e","target":{"project":"angular-nxpoc-e2e","target":"e2e"},"projectRoot":"apps/angular-nxpoc-e2e","overrides":{}}},"dependencies":{"angular-nxpoc-e2e:e2e":[]}},"angular-nxpoc-e2e:e2e:production":{"roots":["angular-nxpoc-e2e:e2e:production"],"tasks":{"angular-nxpoc-e2e:e2e:production":{"id":"angular-nxpoc-e2e:e2e:production","target":{"project":"angular-nxpoc-e2e","target":"e2e","configuration":"production"},"projectRoot":"apps/angular-nxpoc-e2e","overrides":{}}},"dependencies":{"angular-nxpoc-e2e:e2e:production":[]}},"angular-nxpoc-e2e:e2e:ci":{"roots":["angular-nxpoc-e2e:e2e:ci"],"tasks":{"angular-nxpoc-e2e:e2e:ci":{"id":"angular-nxpoc-e2e:e2e:ci","target":{"project":"angular-nxpoc-e2e","target":"e2e","configuration":"ci"},"projectRoot":"apps/angular-nxpoc-e2e","overrides":{}}},"dependencies":{"angular-nxpoc-e2e:e2e:ci":[]}},"angular-nxpoc-e2e:lint":{"roots":["angular-nxpoc-e2e:lint"],"tasks":{"angular-nxpoc-e2e:lint":{"id":"angular-nxpoc-e2e:lint","target":{"project":"angular-nxpoc-e2e","target":"lint"},"projectRoot":"apps/angular-nxpoc-e2e","overrides":{}}},"dependencies":{"angular-nxpoc-e2e:lint":[]}},"angular-nxpoc:build":{"roots":["angular-nxpoc:build:production"],"tasks":{"angular-nxpoc:build:production":{"id":"angular-nxpoc:build:production","target":{"project":"angular-nxpoc","target":"build","configuration":"production"},"projectRoot":"apps/angular-nxpoc","overrides":{}}},"dependencies":{"angular-nxpoc:build:production":[]}},"angular-nxpoc:build:production":{"roots":["angular-nxpoc:build:production"],"tasks":{"angular-nxpoc:build:production":{"id":"angular-nxpoc:build:production","target":{"project":"angular-nxpoc","target":"build","configuration":"production"},"projectRoot":"apps/angular-nxpoc","overrides":{}}},"dependencies":{"angular-nxpoc:build:production":[]}},"angular-nxpoc:build:development":{"roots":["angular-nxpoc:build:development"],"tasks":{"angular-nxpoc:build:development":{"id":"angular-nxpoc:build:development","target":{"project":"angular-nxpoc","target":"build","configuration":"development"},"projectRoot":"apps/angular-nxpoc","overrides":{}}},"dependencies":{"angular-nxpoc:build:development":[]}},"angular-nxpoc:serve":{"roots":["angular-nxpoc:serve:development"],"tasks":{"angular-nxpoc:serve:development":{"id":"angular-nxpoc:serve:development","target":{"project":"angular-nxpoc","target":"serve","configuration":"development"},"projectRoot":"apps/angular-nxpoc","overrides":{}}},"dependencies":{"angular-nxpoc:serve:development":[]}},"angular-nxpoc:serve:production":{"roots":["angular-nxpoc:serve:production"],"tasks":{"angular-nxpoc:serve:production":{"id":"angular-nxpoc:serve:production","target":{"project":"angular-nxpoc","target":"serve","configuration":"production"},"projectRoot":"apps/angular-nxpoc","overrides":{}}},"dependencies":{"angular-nxpoc:serve:production":[]}},"angular-nxpoc:serve:development":{"roots":["angular-nxpoc:serve:development"],"tasks":{"angular-nxpoc:serve:development":{"id":"angular-nxpoc:serve:development","target":{"project":"angular-nxpoc","target":"serve","configuration":"development"},"projectRoot":"apps/angular-nxpoc","overrides":{}}},"dependencies":{"angular-nxpoc:serve:development":[]}},"angular-nxpoc:extract-i18n":{"roots":["angular-nxpoc:extract-i18n"],"tasks":{"angular-nxpoc:extract-i18n":{"id":"angular-nxpoc:extract-i18n","target":{"project":"angular-nxpoc","target":"extract-i18n"},"projectRoot":"apps/angular-nxpoc","overrides":{}}},"dependencies":{"angular-nxpoc:extract-i18n":[]}},"angular-nxpoc:lint":{"roots":["angular-nxpoc:lint"],"tasks":{"angular-nxpoc:lint":{"id":"angular-nxpoc:lint","target":{"project":"angular-nxpoc","target":"lint"},"projectRoot":"apps/angular-nxpoc","overrides":{}}},"dependencies":{"angular-nxpoc:lint":[]}},"angular-nxpoc:test":{"roots":["angular-nxpoc:test"],"tasks":{"angular-nxpoc:test":{"id":"angular-nxpoc:test","target":{"project":"angular-nxpoc","target":"test"},"projectRoot":"apps/angular-nxpoc","overrides":{}}},"dependencies":{"angular-nxpoc:test":[]}},"angular-nxpoc:test:ci":{"roots":["angular-nxpoc:test:ci"],"tasks":{"angular-nxpoc:test:ci":{"id":"angular-nxpoc:test:ci","target":{"project":"angular-nxpoc","target":"test","configuration":"ci"},"projectRoot":"apps/angular-nxpoc","overrides":{}}},"dependencies":{"angular-nxpoc:test:ci":[]}},"angular-nxpoc:serve-static":{"roots":["angular-nxpoc:serve-static"],"tasks":{"angular-nxpoc:serve-static":{"id":"angular-nxpoc:serve-static","target":{"project":"angular-nxpoc","target":"serve-static"},"projectRoot":"apps/angular-nxpoc","overrides":{}}},"dependencies":{"angular-nxpoc:serve-static":[]}}},"errors":{}};
    