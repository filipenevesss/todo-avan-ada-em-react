import { useState } from 'react'

const TodoForm = ({ addTodo }) => {
    const [value, setValue] = useState("");
    const [category, setCaregory] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        if(!value || !category) return;
        // adicionar todo
        addTodo(value, category);
        // limpar campos
        setValue("");
        setCaregory("");
    };

  return <div className="todo-form">
    <h2>Adicionar nova tarefa</h2>
    <form onSubmit={handleSubmit}>
        <input 
        type="text" 
        placeholder="Digite o título da tarefa" 
        onChange={(e) => setValue(e.target.value)}
        value={value}
        />
        <select value={category} onChange={(e) => setCaregory(e.target.value)}> 
            <option value="">Selecione uma categoria</option>
            <option value="Trabalho">Trabalho</option>
            <option value="Pessoal">Pessoal</option>
            <option value="Estudos">Estudos</option>
        </select>
        <button type="submit">Criar tarefa</button>
    </form>
  </div>
}

export default TodoForm