import { Button } from '@renderer/components/ui/button'

export function Settings() {
  const ipcHandle = async () => {
    const res = await window.electron.ipcRenderer.invoke('toggle-always-on-top')
    console.log(res)
  }

  return (
    <div className="p-2">
      <h1>Home</h1>
      <Button onClick={ipcHandle}>Toggle always on top</Button>
    </div>
  )
}
