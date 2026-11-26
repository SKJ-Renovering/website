INSERT INTO employees
  (employee_username, employee_password, employee_first_name, employee_last_name, employee_phone, employee_mail)
VALUES
  ('test', '123', 'Test', 'Employee', '12345678', 'test.employee@example.com');

INSERT INTO requests
  (request_body, customer_first_name, customer_last_name, customer_email, customer_phone_number, is_read, is_replied, date_time_received)
VALUES
  ('Hej, jeg vil gerne høre mere om jeres tilbud på en ny hjemmeside.', 'Test', 'Kunde', 'test.kunde@example.com', '12345678', false, false, NOW()),
  ('Kan I hjælpe med at gøre vores nuværende side hurtigere og mobilvenlig?', 'Mette', 'Hansen', 'mette.hansen@example.com', '23456789', true, false, NOW()),
  ('Vi mangler et bookingsystem til vores frisørsalon. Hvad koster det?', 'Jonas', 'Nielsen', 'jonas.nielsen@example.com', NULL, false, false, NOW());

INSERT INTO archived_requests
  (request_body, customer_first_name, customer_last_name, customer_email, customer_phone_number, date_time_received, date_time_replied, employee_id)
VALUES
  ('Hej, kan I lave en webshop til min butik?', 'Arkiv', 'Kunde', 'arkiv.kunde@example.com', '87654321', NOW(), NOW(), 1),
  ('Vi vil gerne have et nyt logo og en landingsside.', 'Sofie', 'Larsen', 'sofie.larsen@example.com', '34567890', NOW(), NOW(), 1),
  ('Tilbyder I hosting og vedligeholdelse af hjemmesider?', 'Peter', 'Andersen', 'peter.andersen@example.com', NULL, NOW(), NOW(), 1);