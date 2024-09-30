import './NewPost.css';

export default function NewPost({ form, changeForm, onSubmit }) {
  return (
    <>
      <h1>New Post</h1>

      <form className="form-new-post" onSubmit={(event) => onSubmit(event)}>
        <label>Titel</label>
        <input type="text"
               id="form-input-title"
               name="title"
               value={form.title}
               placeholder="Titel"
               onChange={(e) => changeForm('title', e.target.value)} />
        <label>Subtitel</label>
        <input type="text"
               id="form-input-subtitle"
               name="subtitle"
               value={form.subtitle}
               placeholder="Subtitel"
               onChange={(e) => changeForm('subtitle', e.target.value)} />
        <label>Naam van auteur</label>
        <input type="text"
               id="form-input-author"
               name="author"
               value={form.author}
               placeholder="Piet Heijn"
               onChange={(e) => changeForm('author', e.target.value)} />
        <label>Bericht</label>
        <input type="text"
               id="form-input-content"
               name="content"
               value={form.content}
               placeholder="Plaats hier uw bericht"
               onChange={(e) => changeForm('content', e.target.value)} />
      </form>
    </>
  );
}