CREATE TABLE IF NOT EXISTS books (
  id SERIAL PRIMARY KEY,
  author VARCHAR(255),
  title VARCHAR(255),
  ISBN BIGINT,
  image_url VARCHAR(255),
  description TEXT NOT NULL
);

INSERT INTO books(author, title, ISBN, image_url, description)
VALUES ('Vladimir Nabokov','Lolita', 9780307744029, 'http://books.google.com/books/content?id=utvB0I_0SZsC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api', 'Awe and exhiliration--along with heartbreak and mordant wit--abound in Lolita, Nabokov''s most famous and controversial novel, which tells the story of the aging Humbert Humbert''s obsessive, devouring, and doomed passion for the nymphet Dolores Haze. Lolita is also the story of a hypercivilized European colliding with the cheerful barbarism of postwar America. Most of all, it is a meditation on love--love as outrage and hallucination, madness and transformation.');

INSERT INTO books(author, title, ISBN, image_url, description)
VALUES ('Donald Stokes', 'Stokes Butterfly Book', 9780316817806, 'http://books.google.com/books/content?id=_inbAQAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api', 'Copiously illustrated with maps, line drawings, and full-color photographs, this large format paperback book contains the essential information that backyard nature enthusiasts want and need -- to attract butterflies to their yards.');

INSERT INTO books(author, title, ISBN, image_url, description)
VALUES ('Peter Kropotkin', 'The Conquest of Bread', 9781522093411, 'http://books.google.com/books/content?id=mdg4DwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api', 'Written by a Russian prince who renounced his title, this work promotes an anarchist market economy — a system of autonomous cooperative collectives. A century after its initial publication, it remains fresh and relevant.');

INSERT INTO books(author, title, ISBN, image_url, description)
VALUES ('Christopher Roy', 'Jeff Goldblum 151 Success Facts - Everything you need to know about Jeff Goldblum', 9781488596186, 'http://books.google.com/books/content?id=MVgIBwAAQBAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api', 'An excellent ready Jeff Goldblum reference. This book is your ultimate resource for Jeff Goldblum. Here you will find the most up-to-date 151 Success Facts, Information, and much more. In easy to read chapters, with extensive references and links to get you to know all there is to know about Jeff Goldblum''s Early life, Career and Personal life right away. A quick look inside: Cameo role - Actors and writers, The Music Man - In popular culture, Hideaway (film) - Reception, Welcome to Hollywood - Celebrity cameos, Benedum Center - Restoration, The Knights of Prosperity - Name changes and scheduling, Sunset Strip - Celebrities, List of film collaborations - A, Steven Berkoff - References in popular culture, Tim and Eric Awesome Show, Great Job! - Overview, 1997 in film - L-Q, Adam Resurrected, Auggie Rose - Cast, Law and Order: Criminal Intent - History, The Lost World: Jurassic Park - Plot, Deep Cover - Plot, 1995 in film - E-K, The Stand (TV miniseries) - Casting and production notes, Nashville (film), Raines, Life Story (TV film) - Credits, 1989 in film - R-Z, Mindy Simmons - The Simpsons (season 7)|Season 7, Jurassic Park (film) - Cast, Vaudeville Theatre - Recent and present productions, Robert Fox (producer) - Life and career, Thank God It''s Friday, 2001 in cinema - L-Q, Jeff B. Davis, Tim and Eric''s Billion Dollar Movie, 1978 in film - Notable films released in 1978, Chain of Fools (film) - Cast, Le Week-End - Plot, List of recurring characters in Friends - Leonard Hayes, 1984 in film - Notable films released in 1984, Randall Flagg - Film, Into the Night (film) - Plot, Glee (season 3) - Cast, Beyond Suspicion - Cast, Jurassic Park: The Lost World, Twisted Obsession, and much more...');

INSERT INTO books(author, title, ISBN, image_url, description)
VALUES ('Victor Pelevin', 'Homo Zapiens', 9781101175262, 'http://books.google.com/books/content?id=Pmwhq_ZJPNkC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api', 'The collapse of the Soviet Union has opened up a huge consumer market, but how do you sell things to a generation that grew up with just one type of cola? When Tatarsky, a frustrated poet, takes a job as an advertising copywriter, he finds he has a talent for putting distinctively Russian twists on Western-style ads. But his success leads him into a surreal world of spin doctors, gangsters, drug trips, and the spirit of Che Guevera, who, by way of a Ouija board, communicates theories of consumer theology. A bestseller in Russia, Homo Zapiens displays the biting absurdist satire that has gained Victor Pelevin superstar status among today''s Russian youth, disapproval from the conservative Moscow literary world, and critical acclaim worldwide.');