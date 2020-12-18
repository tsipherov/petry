import Header from '../appHeader/Header';
import PostAddPanel from '../postAddPanel/PostAddPanel';
import PostStatusFilter from '../postFilter/PostStatusFilter';
import PostList from '../postList/PostList';
import SearchPanel from '../searchPanel/SearchPanel';
import './App.css';
import { data } from '../../data'

function App() {

  return (
    <div className="App">
      <Header />
      <div className="d-flex search-panel">
        <SearchPanel />
        <PostStatusFilter />
      </div>
      <PostList data={ data }/>
      <PostAddPanel />

    </div>
  );
}

export default App;
