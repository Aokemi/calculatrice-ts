// interface MultipleInputsProps {
//     num1: number
//     setNum1: (num: number) => void;
//     num2: number
//     setNum2: (num: number) => void;
// }

// export const MultipleInputs = ({ num1, setNum1, num2, setNum2 }: MultipleInputsProps) => {

//     const handleChange1 = (e : React.ChangeEvent<any> ) => {

//         setNum1(e.target.value)

//     }

//     const handleChange2 = (e : React.ChangeEvent<any> ) => {

//         setNum2(e.target.value)

//     }

//     return (
//         <div>
//             <label htmlFor="name">Choisir un nombre : </label>
//             <input type="text" name="num1" value={num1} onChange={handleChange1}/>
//             <label htmlFor="name">Choisir un autre nombre : </label>
//             <input type="text" name="num2" value={num2} onChange={handleChange2}/>
//         </div>
//     );
// };