import { publicAsset } from '../lib/publicAsset'

export function Grain() {
  return (
    <div
      className="grain"
      aria-hidden="true"
      style={{ backgroundImage: `url(${publicAsset('/texture.png')})` }}
    />
  )
}
