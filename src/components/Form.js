
function Form() {
    return (
        <div>
            <h1>Add a new bookmark</h1>
            <form action="">
                <input type="text" id="webname" name="website" placeholder="Website"/>
                <input type="text" id="link" name="link" placeholder="http://"/>
                <input type="submit" value="Add"/>
            </form>
        </div>
    )
}

export default Form