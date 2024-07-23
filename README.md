

### How to run and install Assignment:

1. Open the project in cmd or terminal.
2. Type the command `npm install` to install the dependencies.
3. Once dependencies are installed, type the `npm run dev` command to run the assignment.
4. Open the localhost url mentioned on your terminal or cmd after executing the command from step 3.

### Libraries used:
1. `papaparse`: This library is used to convert the csv file into JSON object.
2. `react-vega`: This library is used to create the heatmap specification.
3. `tailwindcss`: This library is helpful in using predefined CSS classes without writing any styles or creating css files.

**Note**: The dependencies used are already present in the `package.json` file and will be installed directly with the installation steps.

### Components:
1. `FileUpload`: This component is used to upload the csv file and converts the csv file to JSON object.
2. `Dropdown`: This component will show 3 dropdown measures (X, Y, Cell), and the data it will show of headers from csv file.
3. `Heatmap`: This component is created with the help of `react-vega` library and it will dynamically change based on the values selected from the `Dropdown` component.


#### Author: [Wahab Memon](https://github.com/wahab896)