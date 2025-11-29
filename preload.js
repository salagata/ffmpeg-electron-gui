const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('ffmpeg', {
  // we can also expose variables, not just functions
})