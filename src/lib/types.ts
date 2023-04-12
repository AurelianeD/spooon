export interface Activities{
	name: string,
	spoon_number: number
}

export const activitiesLoose: Activities[] = [
	{
		name: 'Peu fatiguante',
		spoon_number: 1
	},
	{
		name: 'Fatiguante',
		spoon_number: 2
	},
	{
		name: 'Très fatiguante',
		spoon_number: 3
	},
	{
		name: 'Épuisante',
		spoon_number: 4
	}
];

export const activitiesGain: Activities[] = [
	{
		name: 'Peu reposante',
		spoon_number: 1
	},
	{
		name: 'Reposante',
		spoon_number: 2
	},
	{
		name: 'Très reposante',
		spoon_number: 3
	},
	{
		name: 'Requinquante',
		spoon_number: 4
	},
]
