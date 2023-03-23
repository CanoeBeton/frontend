drop table if exists years_members;

CREATE TABLE years_members (
  year int(11) NOT NULL,
  member_id int(11) NOT NULL,
  PRIMARY KEY (year, member_id)
);

insert into years_members (year, member_id) values
(2020, 2),
(2023, 16),
(2020, 4),
(2013, 13),
(2001, 7),
(2010, 18),
(2018, 12),
(2016, 15),
(2007, 3),
(2017, 6),
(2023, 1),
(2013, 15),
(2019, 19),
(2000, 6),
(2014, 1),
(2022, 4),
(2000, 12),
(2005, 1),
(2004, 4),
(2013, 12),
(2008, 6),
(2007, 5),
(2019, 7),
(2013, 20),
(2016, 2),
(2004, 9),
(2016, 6),
(2021, 2),
(2022, 20),
(2013, 14),
(2000, 7),
(2021, 20),
(2014, 12),
(2004, 13),
(2005, 12),
(2010, 20),
(2007, 12),
(2010, 12),
(2010, 17),
(2009, 2),
(2013, 17),
(2013, 11),
(2002, 13),
(2023, 3),
(2017, 7),
(2004, 17),
(2009, 11),
(2012, 3),
(2008, 12),
(2018, 18),
(2009, 16),
(2001, 2),
(2018, 20),
(2018, 17),
(2003, 12),
(2020, 15),
(2001, 18),
(2019, 8),
(2020, 3),
(2010, 17),
(2013, 14),
(2011, 20),
(2023, 9),
(2004, 8),
(2005, 8),
(2023, 9),
(2002, 9),
(2011, 13),
(2016, 6),
(2010, 1),
(2014, 16),
(2013, 10),
(2013, 18),
(2017, 10),
(2006, 14),
(2010, 1),
(2012, 14),
(2021, 13),
(2008, 12),
(2013, 11),
(2005, 2),
(2009, 5),
(2010, 3),
(2020, 13),
(2007, 12),
(2021, 4),
(2006, 6),
(2014, 8),
(2001, 14),
(2016, 17),
(2009, 20),
(2012, 14),
(2020, 16),
(2000, 4),
(2007, 12),
(2006, 12),
(2017, 6),
(2012, 2),
(2021, 4),
(2000, 4),
(2006, 6),
(2011, 4),
(2000, 20),
(2014, 12),
(2018, 16),
(2023, 10),
(2002, 19),
(2020, 15),
(2001, 18),
(2016, 16),
(2006, 15),
(2022, 4),
(2020, 14),
(2019, 20),
(2015, 15),
(2016, 20),
(2004, 1),
(2000, 10),
(2012, 17),
(2016, 19),
(2021, 6),
(2021, 1),
(2015, 5),
(2016, 5),
(2018, 3),
(2008, 8),
(2003, 15),
(2004, 6),
(2001, 17),
(2020, 6),
(2008, 10),
(2012, 1),
(2021, 8),
(2010, 5),
(2002, 6),
(2007, 4),
(2017, 14),
(2000, 15),
(2004, 2),
(2021, 10),
(2006, 6),
(2023, 15),
(2010, 14),
(2007, 17),
(2013, 6),
(2013, 7),
(2006, 16),
(2021, 5),
(2015, 1),
(2002, 20),
(2022, 20),
(2004, 10),
(2007, 10),
(2000, 15),
(2013, 12),
(2011, 5),
(2015, 8),
(2009, 20),
(2010, 3),
(2012, 19),
(2000, 6),
(2015, 5),
(2010, 7),
(2020, 5),
(2003, 16),
(2007, 18),
(2007, 19),
(2020, 18),
(2000, 10),
(2010, 12),
(2020, 17),
(2004, 11),
(2012, 17),
(2015, 10),
(2007, 18),
(2002, 19),
(2004, 12),
(2020, 10),
(2011, 6),
(2008, 20),
(2000, 5),
(2010, 10),
(2015, 6),
(2002, 12),
(2000, 16),
(2004, 16),
(2002, 18),
(2009, 14),
(2009, 18),
(2018, 9),
(2000, 2),
(2013, 5),
(2015, 13),
(2016, 17),
(2000, 12),
(2003, 2),
(2016, 8),
(2001, 9),
(2017, 15),
(2000, 12),
(2008, 18),
(2009, 8),
(2002, 12),
(2009, 18),
(2003, 5),
(2008, 3),
(2006, 15),
(2002, 2),
(2012, 17),
(2023, 12),
(2019, 9),
(2010, 11),
(2006, 10),
(2003, 5),
(2010, 18),
(2013, 8),
(2014, 8),
(2021, 17),
(2009, 1),
(2004, 17),
(2004, 13),
(2003, 2),
(2009, 6),
(2015, 3),
(2015, 6),
(2002, 3),
(2021, 16),
(2002, 18),
(2006, 13),
(2022, 2);
