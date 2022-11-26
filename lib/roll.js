export default function roll (sides, dice, rolls)
{
	 let result = [];
	 for(let i = 0; i < rolls; i++) result[i]= 1 + Math.floor(Math.random() * sides);
	 
	const output = {
		"sides": sides,
		"dice": dice,
		"rolls": rolls,
		"results": result
                       }

	return JSON.stringify(output);
}
