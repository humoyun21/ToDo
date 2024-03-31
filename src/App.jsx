import { useState } from "react";

const App = () => {
  const [title, setTitle] = useState([]);
  const [inputText, setinputText] = useState('');
  const [description, setdescription] = useState("");
  const [dedline, setDataTime] = useState("");
  const Editing = (e) => {
    setinputText(e.target.value);
  };

  const EditDesc = (e) => {
    setdescription(e.target.value);
  };

  const ChangeDedline = (e) => {
    setDataTime(e.target.value);
  };
  const data = {
    id: Math.random() * 10000,
    title: inputText,
    description: description,
    date: dedline

  }
  const PostAdd = () => {
    if (inputText.trim() !== '' && description.trim() !== '' && dedline.trim() !== '') {
      setTitle([...title, data]);
      setinputText('');
      setdescription('');
      setDataTime('');
    } else {
      alert('Please fill all the fields');
    }
  };
  const TextDel = (id) => {
    setTitle(title.filter((todo) => todo.id !== id));
  };

  const TextEdit = (id) => {
    setinputText(title.find((todo) => todo.id === id).title);
    setdescription(title.find((todo) => todo.id === id).description);
    setDataTime(title.find((todo) => todo.id === id).date);
  };

  return (
    <div className="container mx-auto " >
      <div className="w-[800px] mx-auto p-10 border shadow-md mt-20">
        <h1 className="text-[36px] text-center text-red-500 font-semibold mb-3">Todo List</h1>

        <label htmlFor="titil">
          <p className="text-[20px] py-2 text-black-500 font-semibold">Title add 👇</p>
          <input onChange={Editing}
            value={inputText}
            type="text"
            id="titil"
            className="w-[100%] py-2 px-5 outline-none border-2 rounded-md"
            placeholder=" Enter title  here...🙂" />
        </label>

        <label htmlFor="">
          <p className="text-[20px] py-2 text-black-500 font-semibold">Description add 👇</p>
          <textarea onChange={EditDesc}
            value={description}
            className="w-[100%] py-2 px-5 h-[150px] outline-none border-2 rounded-md"
            placeholder=" Enter  discripshin  here ...🙃"></textarea>
        </label>

        <label htmlFor="titil">
          <p className="text-[20px] py-2 text-green-500 font-semibold">Date time add</p>
          <input onChange={ChangeDedline}
            value={dedline}
            type="datetime-local"
            id="titil"
            className="w-[50%] text-blue-950 text-[20px] py-2 px-5 outline-none border-2 rounded-md" />
        </label>

        <button onClick={PostAdd}
          className="bg-red-500 text-[20px] text-white py-[10px] ml-[50px]  px-7 rounded-md  ">
          <i className="bi bi-file-earmark-plus-fill mr-2"></i>add
        </button>

      </div>
      <ul className="w-[1000px] mx-auto  mt-20 mb-5 grid grid-cols-3 gap-6">
        {
          title.length ? title.map((el) => {
            return <>
              <li className="border shadow-md p-5 rounded-xl">
                <h4 className="text-[20px] py-2 text-[#434141] text-center font-bold">{el.title}</h4>
                <p className="text-[16px] h-[100px] py-2 text-[#434141] text-center font-semibold">
                  {el.description.length > 150 ? el.description.slice(0, 147) + " ..." : el.description}
                </p>
                <p className="text-[18px] py-3 text-[#533c9e] text-center  font-bold">{el.date.slice(0, 10) + " Time " + el.date.slice(11)}</p>
                <button onClick={() => TextDel(el.id)} className="bg-red-500 text-[20px] text-white py-[10px] mt-2  px-7 rounded-md "><i className="bi bi-trash3-fill text-white mr-2"></i>delete</button>
                <button onClick={() => {
                  TextEdit(el.id)
                  TextDel(el.id)
                }} className="bg-green-500 text-[20px] text-white py-[10px] mt-2  px-7 rounded-md ml-3"><i className="bi bi-pencil-square text-white mr-2"></i>edit</button>
              </li>
            </>
          }) : <h1 className="text-[35px] text-red-600 font-bold relative left-[350px]">NOT FOUND 😔</h1>
        }
      </ul>

    </div>
  );
};

export default App;
