import React, {useState, useEffect} from "react"
import { useToasts } from 'react-toast-notifications';
import styled from "styled-components";
import Spinner from "../components/Spinner/Spinner";
import Api from '../api/Api';
import Modal from "../components/Modal/Modal";

const Task = styled.div`
width: 10%;
min-width: 100px;
display: flex;
flex-direction: column;
height: 100px;
text-align: center; 
background-color: #22c1c1;
margin-right: 20px;
border-radius: 5px;
justify-content: space-between;
padding: 5px;
margin-bottom: 20px;
`;

const TaskCont = styled.div`
display: flex;
justify-content: space-around;
flex-wrap: wrap;
margin-top: 20px;
`;

export default function Users() {
    const [data, setData] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [modalTask, setModalTask] = useState({});
    const [loading, setLoading] = useState(false);
    const [listSize, setListSize] = useState(5);
    const { addToast } = useToasts();

    const getData = (amount) => {
        setLoading(true);
        return Api.get(`/task/list/${amount}`).then((res)=>{
            setData(res.data);
            setLoading(false);
        }).catch((error)=>{     
            setLoading(false);
            addToast(error.message, { appearance: 'error' });
        }); 
    }

    const completeTask = ()=> {
        return Api.put('/task', modalTask).then((res)=>{
            setShowModal(false);
            addToast(`Tarea ${modalTask.id} completada` , { appearance: 'success' });
        }).catch((error)=>{     
            setShowModal(false);
            addToast(error.message, { appearance: 'error' });
        }); 
    };

    useEffect(() => {
        getData(listSize);
    },[]);

    useEffect(() => {
        getData(listSize);
    },[listSize]);

    return loading ? (<Spinner/>) : (<>
        <div>
            <label htmlFor="listSize">Change the amount of items in the task list: </label>
            <input id="listSize" type="number" value={listSize} onChange={(e)=>{
                if (e.target.value && e.target.value > 0) setListSize(e.target.value)}} 
            />
        </div>
        <TaskCont>
            {data.map((task) => {
                return (
                    <Task key={task.uuid}  onClick={e => { setModalTask(task); setShowModal(true);}}>
                        <span style={{fontSize: '12px'}}>uuid:  {task.uuid}</span>
                        <div style={{fontSize: '14px', fontWeight: 'bold'}}>{task.title}</div>
                    </Task>
                );
            })}
        </TaskCont>
        <Modal title="Task Detail" show={showModal} onClose={(e)=>{setShowModal(false)}}>
            <span style={{fontSize: '12px'}}>uuid:  {modalTask.uuid}</span>
            <div style={{fontSize: '14px', fontWeight: 'bold'}}>{modalTask.title}</div>
            <button onClick={completeTask}>Completar Tarea</button>
        </Modal>
        </>
    );
}