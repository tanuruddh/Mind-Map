export const initialNodes = [
    { id: '1', type: 'default', data: { label: 'Car Manufacturing' }, position: { x: 900, y: 0 } },
    { id: '2', type: 'default', data: { label: 'Research' }, position: { x: 100, y: 200 } },
    { id: '3', type: 'default', data: { label: 'Planning' }, position: { x: 500, y: 200 } },
    { id: '4', type: 'default', data: { label: 'Designing' }, position: { x: 900, y: 200 } },
    { id: '5', type: 'default', data: { label: 'Manufacturing' }, position: { x: 1300, y: 200 } },
    { id: '6', type: 'default', data: { label: 'Sales/Marketing' }, position: { x: 1700, y: 200 } },
    { id: '7', type: 'default', data: { label: 'External' }, position: { x: 0, y: 400 } },
    { id: '8', type: 'default', data: { label: 'Internal' }, position: { x: 200, y: 400 } },
    { id: '9', type: 'default', data: { label: 'PRD' }, position: { x: 400, y: 400 } },
    { id: '10', type: 'default', data: { label: 'Specs' }, position: { x: 600, y: 400 } },
    { id: '11', type: 'default', data: { label: 'Hardware' }, position: { x: 800, y: 400 } },
    { id: '12', type: 'default', data: { label: 'Software' }, position: { x: 1000, y: 400 } },
    { id: '13', type: 'default', data: { label: 'Material' }, position: { x: 1200, y: 400 } },
    { id: '14', type: 'default', data: { label: 'Production' }, position: { x: 1400, y: 400 } },
    { id: '15', type: 'default', data: { label: 'Online' }, position: { x: 1600, y: 400 } },
    { id: '16', type: 'default', data: { label: 'Dealership' }, position: { x: 1800, y: 400 } },
    { id: '17', type: 'default', data: { label: 'B2C' }, position: { x: 0, y: 600 } },
    { id: '18', type: 'default', data: { label: 'B2C' }, position: { x: 200, y: 600 } },
    { id: '19', type: 'default', data: { label: 'online' }, position: { x: 0, y: 800 } },
    { id: '20', type: 'default', data: { label: 'Interview' }, position: { x: 200, y: 800 } },
    { id: '21', type: 'default', data: { label: 'Public Data' }, position: { x: 400, y: 800 } },
    { id: '22', type: 'default', data: { label: 'Health' }, position: { x: 600, y: 800 } },



];
const initialEdges = [{ id: 'e1-2', source: '1', target: '2', label: 'Next' },
{ id: 'e1-3', source: '1', target: '3', label: 'Next' },
{ id: 'e1-4', source: '1', target: '4', label: 'Next' },
{ id: 'e4-5', source: '1', target: '5', label: 'Next' },
{ id: 'e4-6', source: '1', target: '6', label: 'Next' },
{ id: 'e6-7', source: '2', target: '7', label: 'Next' },
{ id: 'e6-8', source: '2', target: '8', label: 'Next' },
{ id: 'e6-9', source: '3', target: '9', label: 'Next' },
{ id: 'e7-10', source: '3', target: '10', label: 'Next' },
{ id: 'e10-11', source: '4', target: '11', label: 'Next' },
{ id: 'e10-12', source: '4', target: '12', label: 'Next' },
{ id: 'e10-13', source: '5', target: '13', label: 'Next' },
{ id: 'e10-14', source: '5', target: '14', label: 'Next' },
{ id: 'e14-15', source: '6', target: '15', label: 'Next' },
{ id: 'e2-16', source: '6', target: '16', label: 'Next' },
{ id: '16-17', source: '7', target: '17', label: 'Next' },
{ id: '17-18', source: '7', target: '18', label: 'Next' },
{ id: '17-19', source: '17', target: '19', label: 'Next' },
{ id: '18-20', source: '17', target: '20', label: 'Next' },
{ id: '20-21', source: '17', target: '21', label: 'Next' },
{ id: '20-22', source: '17', target: '22', label: 'Next' },];

export default initialEdges;