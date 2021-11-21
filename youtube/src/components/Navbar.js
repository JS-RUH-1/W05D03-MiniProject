

function Navbar() {
    return (
        <nav class="navbar navbar-light bg-white shadow">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">
                
                    <img src={"https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_play_button_icon_%282013%E2%80%932017%29.svg"} width="32" />

                    YouTube
                </a>

                <div class="input-group force-width">
                    <input type="text" class="form-control" placeholder="Search"></input>
                    <button class="btn btn-outline-secondary" type="button" id="button-addon2">
                    <img src={"https://upload.wikimedia.org/wikipedia/commons/1/14/Search-icon.png"} width="32"/>

                    </button>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;