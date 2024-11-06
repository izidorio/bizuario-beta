import { createElectronRouter } from 'electron-router-dom'

export const { Router, registerRoute, settings } = createElectronRouter({
  port: 4927, // a porta em que o seu servidor React está rodando ./electron.vite.config.ts "... renderer: { server: { port: 4927 }, ..."

  types: {
    /**
     * Os ids das janelas da sua aplicação, pense nesses ids como os basenames das rotas
     * essa nova forma permitirá que o intelisense do seu editor te ajude a saber quais ids estão disponíveis
     * tanto no main quanto no renderer process
     */
    ids: ['main']
  }
})
