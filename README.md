# READ ME
1. Run npm install
2. Run webpack
3. Open index.html

# Structure

## List of Components
- Navbar Component
- Home Component
- Subreddit Component
- SubmitForm Component

## Description

If I were to do this project again, I would have used a Redux along with React. I believe it would have been easier to add/edit/update and also it'll allow the ability to store the current state.

At the moment, this single page app has the ability to add a subreddit, edit and delete. Using the Reddit API, it fetches the current Subreddit topics and renders the top 25 with the title and description for each one.

The SubmitForm component was used to determine whether the Modal rendered was for the 'Edit Subreddit Form' or 'New Subreddit Form'. The ModalType is passed in as a prop from the Subreddits component to determine on the SubmitForm component which button is pressed and which modal should be rendered, keeping the code DRY.

In order to find the correct subreddit to edit or delete, I passed in the idx as a prop to the SubmitForm, that way I could keep track of each subreddit and easily find it.

A small bug I was working on involved keeping the old state for an edit form.

Please let me know if you have any questions or feedback. I would greatly appreciate it. Thank you!
