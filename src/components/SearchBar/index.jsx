import { useState } from "react";
import Styles from "./styles.module.css"

function SearchBar() {
    const [search, setSearch] = useState("");

    return (
        <div className={Styles.search}>
            <input
                type="text"
                placeholder="Buscar projetos, tarefas... "
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />

            <button>🔍</button>
        </div>
    );
}

export default SearchBar;