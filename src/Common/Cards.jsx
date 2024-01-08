import React from 'react';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Table from 'react-bootstrap/Table'


function Cards({user,name}) {
  return <>
        <Card.Body className='mb-5'>
          <div className='mb-4'> Name</div>
          <Card.Title>{user.name} </Card.Title>
          <div>UserName - <span style={{fontWeight:"Bold"}}>{user.username}</span></div>
          <div>Phone - <span style={{fontWeight:"Bold"}}>{user.phone}</span></div>
          <div className='mb-5' >Email - <span style={{fontWeight:"Bold"}}>{user.email}</span></div>

          {/* <Card.Text className='mt-3'>
            <div className='d-flex mx-auto justify-content-center '>
                <div className='mx-2' >
                <DropdownButton variant='secondary' id="dropdown-item-button" title="Address">
      <Dropdown.ItemText> City  <span style={{fontWeight:"Bold"}} >{user.address.city}</span></Dropdown.ItemText>
      <Dropdown.ItemText>Street <span style={{fontWeight:"Bold"}} >{user.address.street}</span></Dropdown.ItemText>
      <Dropdown.ItemText>Zipcode <span style={{fontWeight:"Bold"}} >{user.address.zipcode}</span></Dropdown.ItemText>
      

    </DropdownButton>
                </div>
                <div className='mx-2'>
                <DropdownButton id="dropdown-item-button" title="Company">
      <Dropdown.ItemText>name <span style={{fontWeight:"Bold"}} >{user.company.name}</span> </Dropdown.ItemText>
      <Dropdown.ItemText>Role <span style={{fontWeight:"Bold"}} >{user.company.catchPhrase}</span>  </Dropdown.ItemText>
      

    </DropdownButton>
                </div>

            </div>
          
    
          </Card.Text> */}
          <div className='mb-3'>Location</div>
           <Tab.Container id="left-tabs-example"   defaultActiveKey="first">
      <Row>
        <Col sm={3}>
          <Nav  variant="underline" className="flex-column">
            <Nav.Item>
              <Nav.Link  eventKey="first">Address</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="second">Company</Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
        <Col sm={9}>
          <Tab.Content>
            <Tab.Pane eventKey="first">
              <Table   responsive	
 hover size="sm">
                <tr>
                  <th>City</th>
                  <th>Street</th>
                  <th>Zipcode</th>
                </tr>
                <tr>
                  <td>{user.city}</td>
                  <td>{user.street}</td>
                  <td>{user.zipcode}</td>
                </tr>
              </Table>
            </Tab.Pane>
            <Tab.Pane eventKey="second">
            <Table striped borderless responsive	 hover size="xl">
                <tr>
                  <th>Company name</th>
                  <th>CatchPhrase</th>
                  <th>bs</th>
                </tr>
                <tr>
                  <td>{user.CompanyName}</td>
                  <td>{user.catchPhrase}</td>
                  <td>{user.bs}</td>
                </tr>
              </Table>
              </Tab.Pane>
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
 
          <h6 className=' mt-5 ' ><a href={user.website}>Website Link</a>  </h6>
          
          <hr  className='mb-2'/>
          <div>

          </div>
        </Card.Body>
  
  </>
}

export default Cards;