import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/blog',
    component: ComponentCreator('/blog', '144'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive', 'd2b'),
    exact: true
  },
  {
    path: '/blog/welcome-to-chronify',
    component: ComponentCreator('/blog/welcome-to-chronify', 'a91'),
    exact: true
  },
  {
    path: '/brand',
    component: ComponentCreator('/brand', 'fd3'),
    exact: true
  },
  {
    path: '/pricing',
    component: ComponentCreator('/pricing', '79b'),
    exact: true
  },
  {
    path: '/privacy',
    component: ComponentCreator('/privacy', 'af6'),
    exact: true
  },
  {
    path: '/terms',
    component: ComponentCreator('/terms', 'd0c'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', 'b77'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', 'a46'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/docs/backups',
        component: ComponentCreator('/docs/backups', 'cbc'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/docs/builders',
        component: ComponentCreator('/docs/builders', '992'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/docs/services',
        component: ComponentCreator('/docs/services', '788'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/docs/services/app',
        component: ComponentCreator('/docs/services/app', '15b'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/docs/services/mariadb',
        component: ComponentCreator('/docs/services/mariadb', '762'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/docs/services/mongo',
        component: ComponentCreator('/docs/services/mongo', 'cd7'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/docs/services/mysql',
        component: ComponentCreator('/docs/services/mysql', '32f'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/docs/services/postgres',
        component: ComponentCreator('/docs/services/postgres', 'e6c'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/docs/services/redis',
        component: ComponentCreator('/docs/services/redis', 'cd5'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/docs/templates/ackee',
        component: ComponentCreator('/docs/templates/ackee', '87b'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/docs/templates/activepieces',
        component: ComponentCreator('/docs/templates/activepieces', '442'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/docs/templates/actualbudget',
        component: ComponentCreator('/docs/templates/actualbudget', 'ef0'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/docs/templates/adminer',
        component: ComponentCreator('/docs/templates/adminer', '368'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/docs/templates/anonupload',
        component: ComponentCreator('/docs/templates/anonupload', '908'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/docs/templates/answer',
        component: ComponentCreator('/docs/templates/answer', 'abe'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/docs/templates/appsmith',
        component: ComponentCreator('/docs/templates/appsmith', 'e16'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/docs/templates/authorizer',
        component: ComponentCreator('/docs/templates/authorizer', 'e22'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/docs/templates/barrage',
        component: ComponentCreator('/docs/templates/barrage', '5f8'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/docs/templates/baserow',
        component: ComponentCreator('/docs/templates/baserow', 'c10'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/docs/templates/bookstack',
        component: ComponentCreator('/docs/templates/bookstack', '095'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/docs/templates/budibase',
        component: ComponentCreator('/docs/templates/budibase', 'cc4'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/docs/templates/changedetection',
        component: ComponentCreator('/docs/templates/changedetection', 'e18'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/docs/templates/chatwoot',
        component: ComponentCreator('/docs/templates/chatwoot', '28f'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/docs/templates/clickhouse',
        component: ComponentCreator('/docs/templates/clickhouse', 'fc1'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/docs/templates/codex-docs',
        component: ComponentCreator('/docs/templates/codex-docs', 'c50'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/docs/templates/commento',
        component: ComponentCreator('/docs/templates/commento', 'a6c'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/docs/templates/coralproject',
        component: ComponentCreator('/docs/templates/coralproject', '68a'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/docs/templates/cubejs',
        component: ComponentCreator('/docs/templates/cubejs', '3f1'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/docs/templates/cyberchef',
        component: ComponentCreator('/docs/templates/cyberchef', '87e'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/docs/templates/dashy',
        component: ComponentCreator('/docs/templates/dashy', '10c'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/docs/templates/deluge',
        component: ComponentCreator('/docs/templates/deluge', '94e'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/docs/templates/directus',
        component: ComponentCreator('/docs/templates/directus', '090'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/docs/templates/documize',
        component: ComponentCreator('/docs/templates/documize', '06c'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/docs/templates/domainmod',
        component: ComponentCreator('/docs/templates/domainmod', '7d1'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/docs/templates/drone',
        component: ComponentCreator('/docs/templates/drone', '485'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/docs/templates/drone-runner',
        component: ComponentCreator('/docs/templates/drone-runner', 'de2'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/docs/templates/duplicati',
        component: ComponentCreator('/docs/templates/duplicati', 'b31'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/docs/templates/element',
        component: ComponentCreator('/docs/templates/element', '643'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/docs/templates/emby',
        component: ComponentCreator('/docs/templates/emby', 'aa3'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/docs/templates/fider',
        component: ComponentCreator('/docs/templates/fider', '9a3'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/docs/templates/filebrowser',
        component: ComponentCreator('/docs/templates/filebrowser', '09a'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/docs/templates/filezilla',
        component: ComponentCreator('/docs/templates/filezilla', 'ad5'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/docs/templates/firefox',
        component: ComponentCreator('/docs/templates/firefox', '012'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/docs/templates/fireshare',
        component: ComponentCreator('/docs/templates/fireshare', '2ad'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/docs/templates/flame',
        component: ComponentCreator('/docs/templates/flame', 'c36'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/docs/templates/flarum',
        component: ComponentCreator('/docs/templates/flarum', '3de'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/docs/templates/freescout',
        component: ComponentCreator('/docs/templates/freescout', 'cce'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/docs/templates/freshrss',
        component: ComponentCreator('/docs/templates/freshrss', '713'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/docs/templates/ghost',
        component: ComponentCreator('/docs/templates/ghost', '90a'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/docs/templates/ghost-file-sharing',
        component: ComponentCreator('/docs/templates/ghost-file-sharing', '72b'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/docs/templates/gitea',
        component: ComponentCreator('/docs/templates/gitea', '2e4'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/docs/templates/gotenberg',
        component: ComponentCreator('/docs/templates/gotenberg', 'a7e'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/docs/templates/gotify',
        component: ComponentCreator('/docs/templates/gotify', 'a79'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/docs/templates/hammond',
        component: ComponentCreator('/docs/templates/hammond', '990'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/docs/templates/hastebin',
        component: ComponentCreator('/docs/templates/hastebin', '399'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/docs/templates/hastypaste',
        component: ComponentCreator('/docs/templates/hastypaste', '413'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/docs/templates/hedgedoc',
        component: ComponentCreator('/docs/templates/hedgedoc', '199'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/docs/templates/heimdall',
        component: ComponentCreator('/docs/templates/heimdall', '9f1'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/docs/templates/homarr',
        component: ComponentCreator('/docs/templates/homarr', '497'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/docs/templates/homeassistant',
        component: ComponentCreator('/docs/templates/homeassistant', '27e'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/docs/templates/humhub',
        component: ComponentCreator('/docs/templates/humhub', '340'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/docs/templates/icecoder',
        component: ComponentCreator('/docs/templates/icecoder', 'f6f'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/docs/templates/imgproxy',
        component: ComponentCreator('/docs/templates/imgproxy', '30d'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/docs/templates/isso',
        component: ComponentCreator('/docs/templates/isso', 'e99'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/docs/templates/jellyfin',
        component: ComponentCreator('/docs/templates/jellyfin', '7b0'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/docs/templates/jellyseerr',
        component: ComponentCreator('/docs/templates/jellyseerr', '29b'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/docs/templates/jirafeau',
        component: ComponentCreator('/docs/templates/jirafeau', '218'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/docs/templates/kanboard',
        component: ComponentCreator('/docs/templates/kanboard', 'a8f'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/docs/templates/kavita',
        component: ComponentCreator('/docs/templates/kavita', '0b9'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/docs/templates/komga',
        component: ComponentCreator('/docs/templates/komga', 'a73'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/docs/templates/languagetool',
        component: ComponentCreator('/docs/templates/languagetool', '238'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/docs/templates/lavalink',
        component: ComponentCreator('/docs/templates/lavalink', '645'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/docs/templates/lenpaste',
        component: ComponentCreator('/docs/templates/lenpaste', 'a86'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/docs/templates/libreoffice',
        component: ComponentCreator('/docs/templates/libreoffice', 'fd9'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/docs/templates/libretranslate',
        component: ComponentCreator('/docs/templates/libretranslate', '8b0'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/docs/templates/limesurvey',
        component: ComponentCreator('/docs/templates/limesurvey', 'c0d'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/docs/templates/listmonk',
        component: ComponentCreator('/docs/templates/listmonk', 'a94'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/docs/templates/lychee',
        component: ComponentCreator('/docs/templates/lychee', '84c'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/docs/templates/mailcrab',
        component: ComponentCreator('/docs/templates/mailcrab', '917'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/docs/templates/mailhog',
        component: ComponentCreator('/docs/templates/mailhog', '15f'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/docs/templates/matomo',
        component: ComponentCreator('/docs/templates/matomo', 'ee0'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/docs/templates/mattermost',
        component: ComponentCreator('/docs/templates/mattermost', 'db3'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/docs/templates/mealie',
        component: ComponentCreator('/docs/templates/mealie', '107'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/docs/templates/meilisearch',
        component: ComponentCreator('/docs/templates/meilisearch', 'aea'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/docs/templates/memos',
        component: ComponentCreator('/docs/templates/memos', 'e7d'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/docs/templates/metabase',
        component: ComponentCreator('/docs/templates/metabase', '6a0'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/docs/templates/metube',
        component: ComponentCreator('/docs/templates/metube', 'a47'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/docs/templates/miniflux',
        component: ComponentCreator('/docs/templates/miniflux', 'e46'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/docs/templates/mysql-backup',
        component: ComponentCreator('/docs/templates/mysql-backup', 'add'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/docs/templates/n8n',
        component: ComponentCreator('/docs/templates/n8n', 'ca5'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/docs/templates/nextcloud',
        component: ComponentCreator('/docs/templates/nextcloud', '2ee'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/docs/templates/nocodb',
        component: ComponentCreator('/docs/templates/nocodb', 'd1b'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/docs/templates/nodered',
        component: ComponentCreator('/docs/templates/nodered', 'd69'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/docs/templates/ntfy',
        component: ComponentCreator('/docs/templates/ntfy', '75a'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/docs/templates/nzbget',
        component: ComponentCreator('/docs/templates/nzbget', 'a81'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/docs/templates/odoo',
        component: ComponentCreator('/docs/templates/odoo', '82b'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/docs/templates/onedev',
        component: ComponentCreator('/docs/templates/onedev', '546'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/docs/templates/openspeedtest',
        component: ComponentCreator('/docs/templates/openspeedtest', 'd39'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/docs/templates/outline',
        component: ComponentCreator('/docs/templates/outline', '84b'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/docs/templates/owncast',
        component: ComponentCreator('/docs/templates/owncast', '26e'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/docs/templates/owncloud',
        component: ComponentCreator('/docs/templates/owncloud', '1d5'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/docs/templates/oxigen',
        component: ComponentCreator('/docs/templates/oxigen', '873'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/docs/templates/paperlessngx',
        component: ComponentCreator('/docs/templates/paperlessngx', '710'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/docs/templates/phpmyadmin',
        component: ComponentCreator('/docs/templates/phpmyadmin', '4ca'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/docs/templates/pidgin',
        component: ComponentCreator('/docs/templates/pidgin', 'd4c'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/docs/templates/plausible',
        component: ComponentCreator('/docs/templates/plausible', '78f'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/docs/templates/plex',
        component: ComponentCreator('/docs/templates/plex', 'ccc'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/docs/templates/ploi-roadmap',
        component: ComponentCreator('/docs/templates/ploi-roadmap', '1a0'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/docs/templates/pocketbase',
        component: ComponentCreator('/docs/templates/pocketbase', '76e'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/docs/templates/portainer',
        component: ComponentCreator('/docs/templates/portainer', '6d9'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/docs/templates/postgres-backup',
        component: ComponentCreator('/docs/templates/postgres-backup', '02a'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/docs/templates/powerdns-admin',
        component: ComponentCreator('/docs/templates/powerdns-admin', '90c'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/docs/templates/prowlarr',
        component: ComponentCreator('/docs/templates/prowlarr', '5bc'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/docs/templates/psitransfer',
        component: ComponentCreator('/docs/templates/psitransfer', '55e'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/docs/templates/rabbitmq',
        component: ComponentCreator('/docs/templates/rabbitmq', '5f4'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/docs/templates/radarr',
        component: ComponentCreator('/docs/templates/radarr', 'ea9'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/docs/templates/rallly',
        component: ComponentCreator('/docs/templates/rallly', 'a13'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/docs/templates/registry',
        component: ComponentCreator('/docs/templates/registry', '601'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/docs/templates/remmina',
        component: ComponentCreator('/docs/templates/remmina', '2f0'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/docs/templates/restreamer',
        component: ComponentCreator('/docs/templates/restreamer', 'af7'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/docs/templates/rocketchat',
        component: ComponentCreator('/docs/templates/rocketchat', 'cb8'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/docs/templates/rotki',
        component: ComponentCreator('/docs/templates/rotki', 'f56'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/docs/templates/serpbear',
        component: ComponentCreator('/docs/templates/serpbear', 'e66'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/docs/templates/servas',
        component: ComponentCreator('/docs/templates/servas', '2b8'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/docs/templates/silicon-notes',
        component: ComponentCreator('/docs/templates/silicon-notes', 'def'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/docs/templates/simpletorrent',
        component: ComponentCreator('/docs/templates/simpletorrent', '9d0'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/docs/templates/soketi',
        component: ComponentCreator('/docs/templates/soketi', 'b6e'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/docs/templates/sonarr',
        component: ComponentCreator('/docs/templates/sonarr', 'a34'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/docs/templates/sshwifty',
        component: ComponentCreator('/docs/templates/sshwifty', '612'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/docs/templates/statping-ng',
        component: ComponentCreator('/docs/templates/statping-ng', 'b8f'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/docs/templates/strapi',
        component: ComponentCreator('/docs/templates/strapi', '856'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/docs/templates/suitecrm',
        component: ComponentCreator('/docs/templates/suitecrm', 'e99'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/docs/templates/supertokens-core',
        component: ComponentCreator('/docs/templates/supertokens-core', '893'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/docs/templates/tautulli',
        component: ComponentCreator('/docs/templates/tautulli', 'db4'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/docs/templates/typebot',
        component: ComponentCreator('/docs/templates/typebot', '478'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/docs/templates/typesense',
        component: ComponentCreator('/docs/templates/typesense', 'fb8'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/docs/templates/umami',
        component: ComponentCreator('/docs/templates/umami', '224'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/docs/templates/uptimekuma',
        component: ComponentCreator('/docs/templates/uptimekuma', 'a7a'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/docs/templates/vaultwarden',
        component: ComponentCreator('/docs/templates/vaultwarden', 'eea'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/docs/templates/verdaccio',
        component: ComponentCreator('/docs/templates/verdaccio', 'e65'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/docs/templates/vscode-server',
        component: ComponentCreator('/docs/templates/vscode-server', '318'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/docs/templates/wakatime',
        component: ComponentCreator('/docs/templates/wakatime', '19c'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/docs/templates/weblate',
        component: ComponentCreator('/docs/templates/weblate', 'c15'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/docs/templates/wg-easy',
        component: ComponentCreator('/docs/templates/wg-easy', '109'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/docs/templates/whiteboard',
        component: ComponentCreator('/docs/templates/whiteboard', 'ce9'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/docs/templates/wikijs',
        component: ComponentCreator('/docs/templates/wikijs', 'dde'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/docs/templates/windmill',
        component: ComponentCreator('/docs/templates/windmill', '714'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/docs/templates/wizarr',
        component: ComponentCreator('/docs/templates/wizarr', 'b37'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/docs/templates/wordpress',
        component: ComponentCreator('/docs/templates/wordpress', 'f96'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/docs/templates/zipline',
        component: ComponentCreator('/docs/templates/zipline', '0c1'),
        exact: true,
        sidebar: "defaultSidebar"
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', '3a3'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
