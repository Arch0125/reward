import { useContract, useSigner } from 'wagmi'
import PointsABI from '../contracts/ABI/PointsABI.json';

function GetContract() {
  const { data: signer, isError, isLoading } = useSigner()

  const contract = useContract({
    addressOrName: '0x2dea6d66FEe8489b161747abdBa83457cd028CFd',
    contractInterface: PointsABI,
    signerOrProvider: signer,
  })

  return contract;
}

export default GetContract;