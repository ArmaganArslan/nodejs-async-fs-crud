import { writeFile, readFile, unlink } from 'node:fs/promises';

async function processFile() {

    try {
        const initialData = { name: "Employee 1 Name", salary: 2000 }

        await writeFile('employees.json', JSON.stringify(initialData, null, 2));
        console.log('File written successfully');

        const data = await readFile('employees.json', 'utf-8');
        console.log('Data is:', data);

        const parsed = JSON.parse(data);
        parsed.name = "Employee 6 Name"
        parsed.salary = 12000

        await writeFile('employees.json', JSON.stringify(parsed, null, 2));
        console.log('File updated:', parsed)

        await unlink('employees.json')
        console.log('File deleted successfully')
        
    } catch (error) {
        console.log(error)
    }
}

processFile();
