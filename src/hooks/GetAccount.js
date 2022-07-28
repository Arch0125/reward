import { useAccount } from 'wagmi'

function GetAccount() {
  const { address, isConnecting, isDisconnected } = useAccount()

  if (isConnecting) return <label>Connecting…</label>
  if (isDisconnected) return <label>Disconnected</label>
  return address;
}

export default GetAccount