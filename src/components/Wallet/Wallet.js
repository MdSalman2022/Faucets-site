import React, { useContext, useState } from 'react';
import { AiFillWarning } from 'react-icons/ai';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import './Wallet.css'
import ReCAPTCHA from "react-google-recaptcha";
import Button from 'react-bootstrap/Button';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Table from 'react-bootstrap/Table';
import { Context } from '../../contexts/Contexts';

function onChange(value) {
    console.log("Captcha value:", value);
}

const Wallet = () => {

    const { currency } = useContext(Context)


    console.log(currency)

    const [key, setKey] = useState('eth');

    return (
        <div>
            <div className='box-bg p-3 mt-3'>
                <p className='bg p-2'><AiFillWarning />  Your wallet is connected to <span className="fw-bold"> {`${currency}`}</span> , so you are requesting <span className="fw-bold"> {`${currency}`}</span> Link/ETH.</p>
                <Form className='w-50'>
                    <Form.Label htmlFor="basic-url">Wallet Address</Form.Label>
                    <InputGroup className="mb-3">
                        <Form.Control id="basic-url" aria-describedby="basic-addon3" placeholder='Wallet Address' />
                    </InputGroup>
                    <div className="d-flex gap-3">
                        <InputGroup className="mb-3 ">
                            <Form.Control id="basic-url" aria-describedby="basic-addon3" placeholder='Wallet Address' defaultValue="20 Test Link" disabled />
                        </InputGroup>
                        <InputGroup className="mb-3">
                            <Form.Control id="basic-url" aria-describedby="basic-addon3" placeholder='Wallet Address' defaultValue="0.5 ETH" disabled />
                        </InputGroup>
                    </div>
                    <ReCAPTCHA
                        sitekey="6LfHUHIjAAAAAPtMhgjRPqwSO9ZD8Ii263ZULm8Z"
                        onChange={onChange}
                    />
                    <Button variant="primary mt-2">Send Request</Button>

                    <p className="fw-semibold mt-2">Request History</p>

                    <Tabs
                        id="controlled-tab-example"
                        activeKey={key}
                        onSelect={(k) => setKey(k)}
                        defaultActiveKey="eth"
                        className="mb-3 "
                        variant="pills"
                    >
                        <Tab eventKey="eth" title="ETH Transaction History">
                            <Table bordered className='text-center'>
                                <thead>
                                    <tr>
                                        <th>Sr</th>
                                        <th>Time</th>
                                        <th>Amount</th>
                                        <th>Hash</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>12:30 AM</td>
                                        <td>487</td>
                                        <td>4s8er5s5fe57rjmxnfuewrurks</td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>10:30 AM</td>
                                        <td>875</td>
                                        <td>sf7s7ers4e7r7wser</td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td>11:30 AM </td>
                                        <td>797</td>
                                        <td>se4s7er7</td>
                                    </tr>
                                </tbody>
                            </Table>
                        </Tab>
                        <Tab eventKey="testlink" title="TestLink Transaction History">
                            <Table bordered className='text-center'>
                                <thead>
                                    <tr>
                                        <th>Sr</th>
                                        <th>Time</th>
                                        <th>Amount</th>
                                        <th>Hash</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>08:30 AM</td>
                                        <td>748</td>
                                        <td>7s7effkeurusue4</td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>10:23 AM</td>
                                        <td>974</td>
                                        <td>sfe7r7sr4fer</td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td>11:10 AM </td>
                                        <td>874</td>
                                        <td>s4e7s8er</td>
                                    </tr>
                                </tbody>
                            </Table>
                        </Tab>
                    </Tabs>

                </Form>

            </div>
        </div>
    );
};

export default Wallet;