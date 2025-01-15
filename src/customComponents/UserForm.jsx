function UserForm() {
    return (
        <form>
            <h2>My Profile</h2>
            <input type="text" id="fullName" name="fullName" placeholder="Full Name" required />

            <input type="email" id="email" name="email" placeholder="Email" required />

            <input type="text" id="country" name="country" placeholder="Country" required />

            <textarea type="textarea" rows="5" cols="40" id="textarea" name="textarea" placeholder="Bio" required />

            <div className="button-wrapper">
                <input type="submit" id="submit" value="Submit" />
            </div>

        </form>
    )
}

export default UserForm;