/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  //await knex('table_name').del()
  await knex('users').del();
  await knex('tickets').del(); //NOTE FOR FUTURE CLAIRE:: I NEED TO RUN DELETE OTHERWISE KNEX WILL BITCH AND WHINE THAT YOU ARE VIOLATING A PRIMARY KEY CONSTRAINT!
  await knex('users').insert([
    { user_id: 1, 
      email: 'theejackied@gmail.com',
      password: 'password',
      first_name: 'Jackie',
      last_name: 'Daniels',
      phone_number: '7203048826',
    },

    { user_id: 2, 
      email: 'jreese@gmail.com',
      password: 'betterpassword',
      first_name: 'John',
      last_name: 'Reese',
      phone_number: '7208987766',
      role: 'MANAGER',
    },

    { user_id: 3,
      email: 'agent@protonmail.com',
      password: 'ahashedpassword',
      first_name: 'Agent',
      last_name: 'Guy',
      phone_number: '7204206969',
      role: 'ADMIN',
    }
  ]);
  await knex('tickets').insert([
    {
      ticket_id: 1,
      description: 'Need money for guns.',
      created_by: 2,
    },
    {
      ticket_id: 2,
      description: 'Checking status works.',
      status: 'DENIED',
      created_by: 1,
    },
    {
      ticket_id: 3,
      description: 'Checking status works... 2!',
      status: 'APPROVED',
      created_by: 1,
    },
  ]);
};
