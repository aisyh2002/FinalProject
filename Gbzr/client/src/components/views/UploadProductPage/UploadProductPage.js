import React, { useState } from 'react'
import { Typography, Button, Form, message, Input, Icon } from 'antd';
import FileUpload from '../../utils/FileUpload'
import Axios from 'axios';

const { Title } = Typography;
const { TextArea } = Input;

const Grocery = [
    { key: 1, value: "Spice & Herbs" },
    { key: 2, value: "Vegetables" },
    { key: 3, value: "Fruits" },
   
]

function UploadProductPage(props) {

    const [TitleValue, setTitleValue] = useState("")
    const [DescriptionValue, setDescriptionValue] = useState("")
    const [PriceValue, setPriceValue] = useState(0)
    const [GroceryValue, setGroceryValue] = useState(1)

    const [Images, setImages] = useState([])


    const onTitleChange = (event) => {
        setTitleValue(event.currentTarget.value)
    }

    const onDescriptionChange = (event) => {
        setDescriptionValue(event.currentTarget.value)
    }

    const onPriceChange = (event) => {
        setPriceValue(event.currentTarget.value)
    }

    const onGrocerysSelectChange = (event) => {
      setGroceryValue(event.currentTarget.value)
    }

    const updateImages = (newImages) => {
        setImages(newImages)
    }
    const onSubmit = (event) => {
        event.preventDefault();


        if (!TitleValue || !DescriptionValue || !PriceValue ||
            !GroceryValue || !Images) {
            return alert('fill all the fields first!')
        }

        const variables = {
            writer: props.user.userData._id,
            title: TitleValue,
            description: DescriptionValue,
            price: PriceValue,
            images: Images,
            grocery: GroceryValue,
        }

        Axios.post('/api/product/uploadProduct', variables)
            .then(response => {
                if (response.data.success) {
                    alert('Product Successfully Uploaded')
                    props.history.push('/')
                } else {
                    alert('Failed to upload Product')
                }
            })

    }

    return (
        <div style={{ maxWidth: '700px', margin: '2rem auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                <Title level={2}> Upload Travel Product</Title>
            </div>


            <Form onSubmit={onSubmit} >

                {/* DropZone */}
                <FileUpload refreshFunction={updateImages} />

                <br />
                <br />
                <label>Title</label>
                <Input
                    onChange={onTitleChange}
                    value={TitleValue}
                />
                <br />
                <br />
                <label>Description</label>
                <TextArea
                    onChange={onDescriptionChange}
                    value={DescriptionValue}
                />
                <br />
                <br />
                <label>Price($)</label>
                <Input
                    onChange={onPriceChange}
                    value={PriceValue}
                    type="number"
                />
                <br /><br />
                <select onChange={onGrocerysSelectChange} value={GroceryValue}>
                    {Grocery.map(item => (
                        <option key={item.key} value={item.key}>{item.value} </option>
                    ))}
                </select>
                <br />
                <br />

                <Button
                    onClick={onSubmit}
                >
                    Submit
                </Button>

            </Form>

        </div>
    )
}

export default UploadProductPage





































// import React, { useState } from 'react'
// import { Typography, Button, Form, message, Input, Icon } from 'antd';
// import FileUpload from '../../utils/FileUpload'
// import Axios from 'axios';

// const { Title } = Typography;
// const { TextArea } = Input;

// const Grocery = [
//     { key: 1, value: "Vegetables" },
//     { key: 2, value: "Fruits" },
//     { key: 3, value: "Spice & Herbs" },
//     { key: 4, value: "Beverages" },
//     { key: 5, value: "Meat & Fish" },
//     { key: 6, value: "Frozen Food" },
//     { key: 7, value: "Dairy & Eggs" }
// ]

// function UploadProductPage(props) {

//     const [TitleValue, setTitleValue] = useState("")
//     const [DescriptionValue, setDescriptionValue] = useState("")
//     const [PriceValue, setPriceValue] = useState(0)
//     const [GroceryValue, setGroceryValue] = useState(1)

//     const [Images, setImages] = useState([])


//     const onTitleChange = (event) => {
//         setTitleValue(event.currentTarget.value)
//     }

//     const onDescriptionChange = (event) => {
//         setDescriptionValue(event.currentTarget.value)
//     }

//     const onPriceChange = (event) => {
//         setPriceValue(event.currentTarget.value)
//     }

//     const onGrocerysSelectChange = (event) => {
//         setGroceryValue(event.currentTarget.value)
//     }

//     const updateImages = (newImages) => {
//         setImages(newImages)
//     }
//     const onSubmit = (event) => {
//         event.preventDefault();


//         if (!TitleValue || !DescriptionValue || !PriceValue ||
//             !GroceryValue || !Images) {
//             return alert('fill all the fields first!')
//         }

//         const variables = {
//             writer: props.user.userData._id,
//             title: TitleValue,
//             description: DescriptionValue,
//             price: PriceValue,
//             images: Images,
//             grocery: GroceryValue,
//         }

//         Axios.post('/api/product/uploadProduct', variables)
//             .then(response => {
//                 if (response.data.success) {
//                     alert('Product Successfully Uploaded')
//                     props.history.push('/')
//                 } else {
//                     alert('Failed to upload Product')
//                 }
//             })

//     }

//     return (
//         <div style={{ maxWidth: '700px', margin: '2rem auto' }}>
//             <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
//                 <Title level={2}> Upload Shopping Bag</Title>
//             </div>


//             <Form onSubmit={onSubmit} >

//                 {/* DropZone */}
//                 <FileUpload refreshFunction={updateImages} />

//                 <br />
//                 <br />
//                 <label>Title</label>
//                 <Input
//                     onChange={onTitleChange}
//                     value={TitleValue}
//                 />
//                 <br />
//                 <br />
//                 <label>Description</label>
//                 <TextArea
//                     onChange={onDescriptionChange}
//                     value={DescriptionValue}
//                 />
//                 <br />
//                 <br />
//                 <label>Price(RM)</label>
//                 <Input
//                     onChange={onPriceChange}
//                     value={PriceValue}
//                     type="number"
//                 />
//                 <br /><br />  
//                 <select onChange={onGrocerysSelectChange} value={GroceryValue}>
//                     {Grocery.map(item => (
//                         <option key={item.key} value={item.key}>{item.value} </option>
//                     ))}
//                 </select>
//                 <br />
//                 <br />

//                 <Button
//                     onClick={onSubmit}
//                 >
//                     Submit
//                 </Button>

//             </Form>

//         </div>
//     )
// }

// export default UploadProductPage
