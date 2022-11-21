import '../components/Header/header.css';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
    const navigate = useNavigate();
  return (
    <div className='homePage'>
        <Button variant="outlined" className='homeBtn2' onClick={() => navigate('/store')}>Let's Go</Button>
        <img src="https://img.freepik.com/premium-vector/movie-time-concept-cinema-banner-design_149152-676.jpg?w=2000" alt="error" width='100%' height='10vh' className='homeImg' />
    </div>
  )
}

export default HomePage