import { MutatingDots } from "react-loader-spinner";

const Loading = () => {
  return (
    <div style={{ width: '100%', height: '70vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <MutatingDots
        height="100"
        width="100"
        color="#22333b"
        secondaryColor='#22333b'
        radius='12.5'
        ariaLabel="mutating-dots-loading"
        visible={true}
      />
    </div>
  )
}

export default Loading