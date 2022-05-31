import logo from './logo.svg';
import './App.css';
import {Box} from './Box.js'
import Card from 'react-bootstrap/Card';
import {  Col, Row } from 'react-bootstrap';
import { Button } from "react-bootstrap";
import Stack from 'react-bootstrap/Stack'
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <>
    <div class='container'>
    <div class='navbox' >
      <img class='logo' src='https://www.iiitnr.ac.in/sites/all/themes/iiit/head.png'/>
    </div>
    
    </div>
    <br/>
    <div className='heading'>
      Cloud Computing
      <br/>
      <br/>
    </div>
    <div className='content'>
    <Stack direction="horizontal" gap={2}>
    
      <Box heading='Suyash Sinha' content='CSE | 201000053' img="https://media-exp1.licdn.com/dms/image/C5603AQH5ufEbuh_73w/profile-displayphoto-shrink_400_400/0/1637495034196?e=1658966400&v=beta&t=0Stfxbb_Q2eHNbbj-yyWQJ98jgf43ytnoU0jfRS1IyM" link="https://www.linkedin.com/in/sinha-suyash/"/>
    
      <Box heading='Kishan G. Mishra' content='CSE | 201000018' img='https://media-exp1.licdn.com/dms/image/C4E03AQG-af6KZGvwBA/profile-displayphoto-shrink_400_400/0/1641415729955?e=1658966400&v=beta&t=rVBzsUvtunxfN4GmZtcIhQBQ5s7yuMzfOijp0d8fvh8' link="https://www.linkedin.com/in/kishan-mishra-245b16206/"/>
      <Box heading='Aman Singh C.R.' content='CSE | 201000004' img='https://media-exp1.licdn.com/dms/image/C4E03AQG-KbAHLVoROw/profile-displayphoto-shrink_400_400/0/1645087563976?e=1658966400&v=beta&t=Yfxk-CZt8dARBXptv_50-Lf2YFmTiRk48D6g_F0XWiw' link="https://www.linkedin.com/in/aman-singh-76aa50220/"/>
      </Stack>
      </div>

      <br/>
      
    
    <br/>
    <br/>
    
   
    
    
     

  
    </>
  );
}

export default App;
