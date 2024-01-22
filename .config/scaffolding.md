- nx g @nx/nest:library --name=filters --buildable=true --publishable=true --directory=/libs/backend/utility --global=true --importPath=@backend/utility/filters --projectNameAndRootFormat=derived --simpleName=true

  - nx g @nx/nest:filter --name=exception-filter --directory=exception-filter --nameAndDirectoryFormat=as-provided

- nx g @nx/nest:library --name=database --buildable=true --publishable=true --directory=/libs/backend/utility --global=true --importPath=@backend/utility/database --projectNameAndRootFormat=derived --simpleName=true

  - nx g @nx/nest:service --name=mariadb/db-connect --nameAndDirectoryFormat=as-provided

- nx g @nx/js:library --name=interfaces --unitTestRunner=jest --directory=/libs/shared/interfaces --importPath=@shared/interfaces --projectNameAndRootFormat=as-provided --simpleName=true
