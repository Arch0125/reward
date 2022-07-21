import { useContract, useSigner } from 'wagmi'
import PointsABI from '../contracts/ABI/PointsABI.json';

function GetContract() {
  const { data: signer, isError, isLoading } = useSigner()

  const contract = useContract({
    addressOrName: '0x24adfeA92DbfEe9982327bA7bF5942b50a51e555',
    contractInterface: PointsABI,
    signerOrProvider: signer,
  })

  return contract;
}

export default GetContract;