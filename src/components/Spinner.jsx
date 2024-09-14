import ClipLoader from 'react-spinners/ClipLoader';

const override = {
  display: 'block',
  margin: '100px auto',
  borderTopColor: 'transparent',
  border: '5px solid rgba(141, 88, 3, 0.6)',
};

const Spinner = () => {
  return (
    <ClipLoader
      loading={true}
      cssOverride={override}
      size={150}
      color="rgba(141, 88, 3, 0.6)"
    />
  );
};

export default Spinner;
