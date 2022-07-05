import React from 'react'
import 'antd/dist/antd.css';
import { Button, Modal,Input } from 'antd';
import { useState } from 'react';
import {  useForm } from 'react-hook-form'


const Formvalidation = () => {
    const {
      register,
      handleSubmit,
      formState: { errors },
      reset,
      trigger,
    } = useForm();


    const [isModalVisible, setIsModalVisible] = useState(false);
   

    const { TextArea } = Input;
    const showModal = () => {
        setIsModalVisible(true);
      };
    
      const handleOk = () => {
        setIsModalVisible(false);
      }

    
      const handleCancel = () => {
        setIsModalVisible(false);
      };

      const onSubmit = (data) => {
        console.log(data);
        alert(`Current State Is: { "Author":"${data.name}","rating:"${data.rating}","comment":"${data.comment}}"}`)
        reset();
        setIsModalVisible(false);
      };


  return (
    <div>

      <div className="card row col-6 offset-3" style={{marginTop:"50px"}}>
  <img style={{height:"300px"}} src="https://rukminim1.flixcart.com/image/495/594/kyrlifk0/watch/g/1/a/2-vkrdgc810-hala-boys-original-imagax6csnvreygg.jpeg?q=50" className="card-img-top" alt="Watch"/>
  <div className="card-body">
    <h5 className="card-title">hala 
VKRDGC810 Multi-Function Stylish Sports PU Strap Amazing Look Cool Style Digital Watch Digital Watch - For Boys</h5>
<h3>₹299</h3>
<button type="button" className="btn btn-secondary btn-info m-2">Add to cart</button> 
<button type="button" className="btn btn-secondary btn-danger">Buy Now</button> <br></br>
<Button type="primary" onClick={showModal}>
submit a feedback comment
      </Button>
      
      <Modal title="Comments" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
     
       <form onSubmit={handleSubmit(onSubmit)}>
       <div className="form-group">
              <label className="col-form-label">Rating</label>
              <input
                type="number"
                min="0"
                 max="5"
                defaultValue="0"
                className={`form-control ${errors.rating && "invalid"}`}
                {...register("rating", {
                  required: "rating is Required",
                  min: {
                    value: 0,
                    message: "Minimum Required rating is 0",
                  },
                  max: {
                    value: 5,
                    message: "Maximum allowed rating is 5",
                  },
                  pattern: {
                    value: /^[0-9]*$/,
                    message: "Only numbers are allowed",
                  }
                })}
                onKeyUp={() => {
                  trigger("rating");
                }}
              />
              {errors.rating && (
                <small className="text-danger">{errors.rating.message}</small>
              )}
            </div>
       <div className="form-group">
              <label className="col-form-label">Name</label>
              <input
              type="text"
                className={`form-control ${errors.name && "invalid"}`}
                {...register("name", { required: "name is Required",
                minLength: {
                  value: 2,
                  message: "Minimum Required length is 2",
                },
                maxLength: {
                  value: 15,
                  message: "Maximum allowed length is 15 ",
                }
               })}
               onKeyUp={() => {
                trigger("name");
              }}
              ></input>
              {errors.name && (
                <small className="text-danger">{errors.name.message}</small>
              )}
            </div>
            <div className="form-group">
              <label className="col-form-label">Comment</label>
              <textarea
                className={`form-control ${errors.message && "invalid"}`}
                {...register("comment", { required: "comment is Required",
                minLength: {
                  value: 10,
                  message: "Minimum Required length is 10",
                },
                maxLength: {
                  value: 100,
                  message: "Maximum allowed length is 100 ",
                }
               })}
               onKeyUp={() => {
                trigger("comment");
              }}
              ></textarea>
              {errors.comment && (
                <small className="text-danger">{errors.comment.message}</small>
              )}
            </div>
           
            <input
              type="submit"
              className="btn btn-primary my-3"
              value="Send comment"
            />
          </form>
      </Modal>
  </div>
</div>
    </div>
  )
}

export default Formvalidation
