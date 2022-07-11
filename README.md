# AngularConfigLoading
### Idee
Manchmal möchten wir die environment.properties extern pflegen und stage-abhängig zur Verfügung stellen.
Das Beispiel zeigt eine Idee, wie Konfigurationen vor dem Bootstrapping der Angular-App geladen werden können.
1. Wir erstellen uns eine typisierte [AppConfig](src/app/config/app.config.ts)
2. Wir erweitern unsere [environment.ts](src/environments/environment.ts) und [environment.prod.ts](src/environments/environment.prod.ts) um die AppConfig
3. Wir sorgen mit der Fetch API in der [main.ts](src/main.ts), dass die externe Konfiguration hier: [env.json](src/assets/env.json) vor dem Bootstrapping der Angular-App geladen wird! Über ein "Object.assign" mergen wir die env.json und environment.ts
4. Wir könnne dann überall in der App auf die Properties typisiert zugreifen: [app.component.ts](src/app/app.component.ts)

Fertig :)
### Wo kommt die Konfiguration nun her? 
Hier im Beispiel liegt sie im assets Ordner. 
* Man könnte aber über die Fetch API auch jede beliebe andere URL aufrufen (Achtugn CORS).
* Man könnte aber auch über eine entsprechende K8s Konfiguration beim Start des PODs die env.json dynamisch in den assets Ordern "linken"...
* Es gibt sicher weitere Möglichkeiten... dedizierten Config-Server im K8s Cluster
