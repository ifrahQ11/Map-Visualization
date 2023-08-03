INSERT INTO vehicles 
(
    id, 
    vehicle_id,
    vehicle_name, 
    plate_num,
    driver_name,
    driver_phone_num,
    coordinates,
    created_at
) 
values 
(
    '1',
    'vehicle1', 
    'BMW', 
    'Some-plate-xyz', 
    'Some-name',
    '+498765416',
    '[{"lat": "51.01" , "long": "-0.05"}, {"lat": "51.00" , "long": "-0.05"}]'::jsonb,
    '2023-08-02 11:30:30'
),
(
    '2',
    'vehicle2', 
    'BMW', 
    'Some-plate-xyz', 
    'Some-name',
    '+498765416',
    '[{"lat": "51.02" , "long": "-0.06"}, {"lat": "51.01" , "long": "-0.06"}]'::jsonb,
    '2023-08-02 11:30:30'
),
(
    '3',
    'vehicle3', 
    'BMW', 
    'Some-plate-xyz', 
    'Some-name',
    '+498765416',
    '[{"lat": "51.03" , "long": "-0.07"}, {"lat": "51.03" , "long": "-0.07"}]'::jsonb,
    '2023-08-02 11:30:30'
),
(
    '4',
    'vehicle4', 
    'BMW', 
    'Some-plate-xyz', 
    'Some-name',
    '+498765416',
    '[{"lat": "51.04" , "long": "-0.08"}, {"lat": "51.04" , "long": "-0.08"}]'::jsonb,
    '2023-08-02 11:30:30'
),
(
    '5',
    'vehicle5', 
    'BMW', 
    'Some-plate-xyz', 
    'Some-name',
    '+498765416',
    '[{"lat": "51.05" , "long": "-0.09"}, {"lat": "51.05" , "long": "-0.09"}]'::jsonb,
    '2023-08-02 11:30:30'
);