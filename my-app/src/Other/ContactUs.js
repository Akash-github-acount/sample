 import React from 'react'
import {Table} from 'react-bootstrap'
import '/node_modules/bootstrap/dist/css/bootstrap.min.css';

 const AboutUs = () => {
   return (
    <div class="container mt-3">
    <Table >
        <tr>CONTACT US</tr>
        <tr>
        <td></td>
            <td>
                NAME
            </td>
            <td>
                CONTACT
            </td>
            <td>
                E MAIL
            </td>
            
        </tr>
  <tr>
      <td><img src={require('../Pics/Dinkesh.PNG')}></img></td>
      <td>Dinkesh Gangadhar Mahajan</td>
      <td>7020480816</td>
      <td>dinkeshm142@gmail.com</td>
      </tr>
      <tr>
      <td><img src={require('../Pics/Sai.PNG')}></img></td>
      <td>Sai Jaiswal</td>
      <td>8830324388</td>
      <td>CDAC ACTS pune Student</td>
      </tr>
      <tr>
      <td><img src={require('../Pics/Ajay.PNG')}></img></td>
      <td>Ajay Singh</td>
      <td>8725823367</td>
      <td>CDAC ACTS pune Student</td>
      </tr>
      <tr>
      <td><img src={require('../Pics/Himanshu.PNG')}></img></td>
      <td>Himanshu Ramdasi</td>
      <td>7218477877</td>
      <td>himanshu.ramdasi2000@gmail.com</td>
      </tr>
      <tr>
      <td><img src={require('../Pics/Jatin.PNG')}></img></td>
      <td>Jatin Raheja</td>
      <td>9592362362</td>
      <td>CDAC ACTS pune Student</td>
      </tr>
      <tr>
      <td><img src={require('../Pics/Akash.PNG')}></img></td>
      <td>Akash Gupta</td>
      <td>8285316982</td>
      <td>akashstar153@gmail.com</td>
      </tr>
</Table>
</div>
   )
 }
 
 export default AboutUs
  